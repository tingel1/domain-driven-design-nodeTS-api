import {GUID} from "../model/interfaces/types";

export interface IDelete <T> {
    Delete(id: GUID): number
    Delete(model: T): number
}