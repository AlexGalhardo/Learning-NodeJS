import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 300,
            name: 'Elixir',
            description: 'bom curso de elixir'
        },
    });

    console.log(result)
}

main()