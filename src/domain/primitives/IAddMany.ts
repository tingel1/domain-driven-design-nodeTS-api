import {GUID} from "../model/interfaces/types";

export interface IAddMany<T> {
    addMany(models: T[]): GUID[] | Promise<GUID[]>
}

