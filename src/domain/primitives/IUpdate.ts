export interface IUpdate <T> {
    update(model: T[]): number | Promise<number>
}
