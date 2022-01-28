import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 300,
            name: 'curso de react',
            description: 'curso do guanabara',
            fk_id_teacher: '35ff0fde-3899-4e3b-8bae-3c386883134a'
        },
    });

    console.log(result)
}

main()