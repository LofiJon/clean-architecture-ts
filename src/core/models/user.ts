import {BaseModel} from "@core/models/base-model";

export class User extends BaseModel {
    name: string
    email: string
    password: string
}