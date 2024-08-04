import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from '@presentation/router/user-routes';
import { CreateUserController } from '@presentation/controllers/user/create-user-controller';
import { CreateUserImpl } from '@core/usecases/create-user-impl';
import { UserRepositoryImpl } from '@infra/repositories/user_repository_impl';

const app = express();
const port = 3000;

const userRepository = new UserRepositoryImpl();
const createUser = new CreateUserImpl(userRepository);
const createUserController = new CreateUserController(createUser);

app.use(bodyParser.json());
app.use('/users', userRoutes(createUserController));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
