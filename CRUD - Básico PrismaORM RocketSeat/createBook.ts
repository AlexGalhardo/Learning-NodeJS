import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.books.create({
        data: {
            name: 'arquitetura limpa',
            author_id: '528eff56-79f3-4041-9a4c-e3cbd8978baf'
        },
    });

    console.log(result)
}

main()