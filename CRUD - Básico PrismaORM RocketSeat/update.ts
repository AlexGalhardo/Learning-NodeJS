import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const resultado = await prisma.courses.update({
        where: {
            id: '942591e7-8864-4815-b457-0de169d62ffe',
        },
        data: {
            name: 'NodeJS Editado',
            duration: 500
        }
    });
    console.log(resultado)
}

main()