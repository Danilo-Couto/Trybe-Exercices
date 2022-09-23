export default interface IGenericModel<T> {
    create(entity: T): Promise<T>;
    update(id: string, entity: T): Promise<T | null>;
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    deleteById(id: string): Promise<void>;
}