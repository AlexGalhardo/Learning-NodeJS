import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany({});
    await prisma.post.deleteMany({});

    const user = await prisma.user.create({
        data: {
            email: 'suporte@b7web.com.br',
            name: 'Bonieky',
            age: 90
        }
    });

    const post = await prisma.post.create({
        data: {
            title: 'Post de teste criado via seed',
            body: 'Este é um post de teste....',
            authorId: user.id
        }
    });
}

main();