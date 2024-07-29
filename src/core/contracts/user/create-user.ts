import {User} from "@core/models/user";
import {UserRequest} from "@core/requests/user-request";

export interface CreateUser {
    execute(request: UserRequest): Promise<User>;
}

