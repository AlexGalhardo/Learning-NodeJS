import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: 'curso de css',
            description: 'curso do guanabara',
            teacher: {
                create: {
                    name: 'Novo professor'
                }
            }
        },
    });

    console.log(result)
}

main()