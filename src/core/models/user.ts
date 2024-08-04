import {BaseModel} from "@core/models/base-model";

export class User extends BaseModel {
    name: string
    email: string
    password: string

    addUser(name: string, email: string, password: string): User {
        this.name = name;
        this.email = email;
        this.password = password;
        return this;
    }

    static mapToModel(data: any): User {
        const user = new User();
        user.id = data.id;
        user.name = data.name;
        user.email = data.email;
        user.password = data.password;
        user.created_at = data.created_at;
        user.updated_at = data.updated_at;
        user.deleted_at = data.deleted_at;
        return user;
    }
}