import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export const all = async (req: Request, res: Response) => {
    const users = await UserService.findAll();
    res.json({ users });
}

export const create = async (req: Request, res: Response) => {
    const { email, name, age } = req.body;

    if(email && name) {
        // TODO: validar e-mail
        const user = await UserService.findOne({ email });
        if(!user) {

            const newUser = await UserService.create({
                email, name, age: parseInt(age)
            });

            res.status(201).json({ user: newUser });
        } else {
            res.json({ error: 'Já existe usuário com este e-mail.' });
        }
    } else {
        res.json({ error: 'Dados não preenchidos.' });
    }
}