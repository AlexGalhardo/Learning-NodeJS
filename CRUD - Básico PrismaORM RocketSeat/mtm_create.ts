import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    /*const result = await prisma.modules.create({
        data: {
            description: 'aprendendo firebase',
            name: 'firebase',
            /*course: {
                create: {
                    course: {
                        connect: {
                            id: '012b26f9-e65a-4be6-95dd-054b3b0caf53'
                        }
                    }
                }
            }

        },
    });*/

    /* const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: '012b26f9-e65a-4be6-95dd-054b3b0caf53',
            fk_id_module: '27937fe6-09d2-4905-88c7-e5689fed8059'
        }
    })*/

    const result = await prisma.coursesModules.create({
        data: {
            course: {
                create: {
                    duration: 200,
                    name: 'curso de nodejs 2.0',
                    description: 'curso completinho'
                }
            },
            module: {
                create: {
                    description: 'curso bão',
                    name: 'curso de prisma io'
                }
            },
        }
    })

    console.log(result)
}

main()