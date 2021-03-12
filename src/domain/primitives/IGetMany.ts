import {GUID} from "../model/interfaces/types";

export interface IGetMany<T> {
    getMany(ids: GUID[]): T | Promise<T>
}
