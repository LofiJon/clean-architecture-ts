import {CreateUser} from "@core/contracts/user/create-user";
import {UserRepository} from "@core/repositories/user-repository";
import {UserRequest} from "@core/requests/user-request";
import {User} from "@core/models/user";

export class CreateUserImpl implements CreateUser {
    constructor(private readonly userRepository: UserRepository) {
    }

    async execute(request: UserRequest): Promise<User> {
        const userNew = new User()
        userNew.addUser(request.name, request.email, request.password);
        return await this.userRepository.add(userNew)
    }
}