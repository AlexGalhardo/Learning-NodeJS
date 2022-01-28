import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: 'Token missing'
        })
    }

    // Bearer token_here
    // [0] - Bearer
    // [1] - token
    const [, token] = authHeader.split(" ")

    try {
        const { sub } = verify(token, '019acc25a4e242bb77ad489832ada12d') as IPayload;

        console.log(sub)

        request.id_deliveryman = sub;

        return next()
    } catch (error) {
        return response.status(401).json({
            message: 'Invalid token'
        })
    }
}