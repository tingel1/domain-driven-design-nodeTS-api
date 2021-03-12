import {GUID} from "../model/interfaces/types";

export interface IGet<T>{
    get(id: GUID): T | Promise<T>
}

