export interface IGetAll<T> {
    getAll(): T | Promise<T>
}
