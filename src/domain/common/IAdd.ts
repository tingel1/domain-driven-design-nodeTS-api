import { GUID } from "../model/interfaces/types";

export interface IAdd<T> {
    add(model: T): GUID
    add(models: T[]): GUID[]
}
