import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    let skip = 0;
    let exist = true

    // [1, 2, 3, 4, 5]
    while (exist) {
        const result = await prisma.courses.findMany({
            skip: skip,
            take: 1
        });

        skip += 1

        if (result.length <= 0) {
            exist = false
        }

        console.log(result)
        console.log('---------')
    }
}

main()