import {UserRepository} from "@core/repositories/user-repository";
import {User} from "@core/models/user";

class MockUserRepository  implements UserRepository {
    private users: User[] = [];

    add(entity: User): Promise<any> {
        return Promise.resolve(0);
    }

    count(): Promise<number> {
        return Promise.resolve(0);
    }

    delete(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    findAll(): Promise<any> {
        return Promise.resolve(undefined);
    }

    findById(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    pageable(request: any): Promise<any> {
        return Promise.resolve(undefined);
    }

}