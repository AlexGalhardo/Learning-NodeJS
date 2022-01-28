import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 600,
            name: 'novo curso html',
            description: 'novo curso do guanabara',
            teacher: {
                connect: {
                    id: '5e5a6295-00b4-4ec2-8978-74517a2f2de0'
                }
            }
        },
    });

    console.log(result)
}

main()