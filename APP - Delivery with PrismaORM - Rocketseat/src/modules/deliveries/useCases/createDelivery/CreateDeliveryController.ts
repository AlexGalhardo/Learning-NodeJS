import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";


export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { item_name } = request.body;
        const { id_client } = request
        const createDeliveryUseCase = new CreateDeliveryUseCase()

        const delivery = await createDeliveryUseCase.execute({
            id_client,
            item_name
        })

        return response.json(delivery)
    }
}