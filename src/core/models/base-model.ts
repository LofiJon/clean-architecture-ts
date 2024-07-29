export abstract class BaseModel {
    id: string
    created_at: Date
    updated_at?: Date
    deleted_at?: Date
}