import { CreateUser } from '@core/contracts/user/create-user';
import { Request, Response } from 'express';

export class CreateUserController {
    constructor(
        private readonly createUser: CreateUser
    ) {}

    async handle(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;
        const request = { name, email, password };
        try {
            const user = await this.createUser.execute(request);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}