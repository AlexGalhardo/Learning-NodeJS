import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.findMany({
        /*where: {
            name: {
                startsWith: 'Curso',
                mode: 'insensitive'
            }
        }*/
        where: {
            OR: [
                {
                    name: {
                        contains: 'nodejs'
                    }
                },
                {
                    name: {
                        contains: 'react'
                    }
                }
            ],
            AND: {
                duration: 100
            }
        }
    });

    console.log(result)
}

main()