import prisma from '../../../../databases/prismaClient';
import { hash } from 'bcrypt'

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({ password, username }: ICreateClient) {
        // validar se usuário existe
        const clientExist = await prisma.clients.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                }
            }
        })

        if (clientExist) {
            throw new Error('Client already exists')
        }

        // criptografar a senha
        const hashPassword = await hash(password, 10)

        // salvar o client
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return client;
    }
}