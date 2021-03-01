import { GUID } from "../model/interfaces/types";

export interface IAdd<T> {
    Add(model: T): GUID
    Add(models: T[]): GUID[]
}
