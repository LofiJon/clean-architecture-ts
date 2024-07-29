import {GenericRepository} from "@core/repositories/generic-repository";
import {User} from "@core/models/user";

export interface UserRepository extends GenericRepository<User> {}