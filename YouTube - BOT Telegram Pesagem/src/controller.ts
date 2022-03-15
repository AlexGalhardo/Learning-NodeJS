import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const timeRangeFromTime = (day: Date) => {
    const [yyyy, mm, dd] = [day.getFullYear(), day.getMonth(), day.getDate()];
    const start = new Date(yyyy, mm, dd);
    const end = new Date(yyyy, mm, dd + 1);
    return { start, end };
}

const decimalToNumber = (num: Prisma.Decimal) => {
    return num as unknown as number;
}

export const controller = {
    async listWeighing(telegramId: string, name: string, sendMessage: (text: string) => Promise<void>) {
        const user = await this.registerUser(telegramId, name);
        const weighings = await prisma.weighing.findMany({
            where: {
                userId: user.id
            },
            orderBy: {
                baseDate: 'desc'
            }
        });

        const msg = weighings
            .map(x => `[${x.baseDate.toLocaleDateString()}] ${x.weight.toFixed(2)}`)
            .join('\r\n');

        sendMessage(msg);
    },
    async lastWeight(currentId: string, userId: string, baseDate: Date) {
        return await prisma.weighing.findFirst({
            where: {
                NOT: {
                    id: currentId
                },
                userId,
                baseDate: {
                    lt: baseDate
                }
            },
            orderBy: {
                baseDate: 'desc'
            }
        })
    },
    async saveWeight(
        telegramId: string,
        name: string,
        baseDate: Date,
        weight: number,
        sendMessage: (text: string) => Promise<void>) {
        const user = await this.registerUser(telegramId, name);
        if (isNaN(weight) || weight <= 0)
            return sendMessage('/pesagem <peso em kg>');

        const { start, end } = timeRangeFromTime(baseDate);
        let currentWeight = await prisma.weighing.findFirst({
            where: {
                userId: user.id,
                baseDate: {
                    gte: start,
                    lt: end
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        currentWeight = currentWeight ?
            await prisma.weighing.update({
                where: {
                    id: currentWeight.id
                },
                data: {
                    weight,
                    createdAt: new Date()
                }
            })
            :
            await prisma.weighing.create({
                data: {
                    userId: user.id,
                    weight,
                    baseDate,
                    createdAt: new Date(0)
                }
            });

        const msgs = [`Peso de ${currentWeight.weight.toFixed(2)} kg salvo para o dia ${currentWeight.baseDate.toLocaleDateString()}`];
        const previousWeight = await this.lastWeight(currentWeight.id, user.id, baseDate);
        if (previousWeight) {
            const diff = decimalToNumber(currentWeight.weight) - decimalToNumber(previousWeight.weight);
            const diffStr = Math.abs(diff).toFixed(2);
            if (diff > 0) {
                msgs.push(`Infelizmente você ganhou ${diffStr} kg desde a última pesagem dia ${previousWeight.baseDate.toLocaleDateString()}`);
            }
            else if (diff < 0) {
                msgs.push(`Parabéns você perdeu ${diffStr} kg desde a última pesagem dia ${previousWeight.baseDate.toLocaleDateString()}`);
            }
            else {
                msgs.push(`Você manteve o seu peso desde a última pesagem dia ${previousWeight.baseDate.toLocaleDateString()}`);
            }
        }
        sendMessage(msgs.join('\n'));
    },
    async registerUser(telegramId: string, name: string) {
        const user = await prisma.user.findFirst({
            where: {
                telegramId
            }
        });

        if (user)
            return user;

        return prisma.user.create({
            data: {
                telegramId,
                name,
                registeredAt: new Date()
            }
        })
    }
}