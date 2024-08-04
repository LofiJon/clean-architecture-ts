export interface GenericRepository<T> {
    count(): Promise<number>
    findAll(): Promise<any>
    add(entity: T): Promise<any>
    findById(id: string): Promise<any>
    delete(id: string): Promise<void>
    pageable(page: number, limit: number, search: string): Promise<{ data: T[], total: number }>;
}