import {GUID} from "../model/interfaces/types";

export interface IDelete <T> {
    delete(id: GUID): number
    delete(model: T): number
}
