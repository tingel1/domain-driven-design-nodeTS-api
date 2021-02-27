import { GUID } from "../model/interfaces/types";

export interface ICreate<T> {
    Create(model: T): GUID
    Create(models: T[]): GUID[]
}