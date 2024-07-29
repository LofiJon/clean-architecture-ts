export interface GenericRepository<T> {
    count(): Promise<number>
    findAll(): Promise<any>
    add(entity: T): Promise<any>
    findById(id: string): Promise<any>
    delete(id: string): Promise<void>
    pageable(request: any): Promise<any>
}