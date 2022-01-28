import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 600,
            name: 'curso de python',
            description: 'curso do guanabara',
            teacher: {
                connectOrCreate: {
                    where: {
                        name: 'Guanabara'
                    },
                    create: {
                        name: 'Guanabara'
                    }
                }
            }
        },
    });

    console.log(result)
}

main()