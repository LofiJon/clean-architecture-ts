import {CreateUserController} from "@presentation/controllers/user/create-user-controller";
import {Router} from "express";

export default (createUserController: CreateUserController) => {
    const router = Router()

    router.post('/users', (req, res) =>
        createUserController.handle(req, res));

    return router
}