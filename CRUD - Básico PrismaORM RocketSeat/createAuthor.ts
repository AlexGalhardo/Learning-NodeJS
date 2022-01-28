import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.authors.create({
        data: {
            name: 'Mayk brito',
            books: {
                /* create: {
                    name: 'clean code'
                }*/
                createMany: {
                    data: [
                        {
                            name: 'como começar na programação'
                        },
                        {
                            name: 'como ser autodidata'
                        }
                    ]
                }
            }
        },
    });

    console.log(result)
}

main()