import {GUID} from "../model/interfaces/types";

export interface IGet<T>{
    Get(id: GUID): T
    Get(ids: GUID[]): T
}