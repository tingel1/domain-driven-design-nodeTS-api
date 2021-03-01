import {GUID} from "../model/interfaces/types";

export interface IGet<T>{
    get(id: GUID): T
    getMany(ids: GUID[]): T[]
    getAll(): T[]
}

