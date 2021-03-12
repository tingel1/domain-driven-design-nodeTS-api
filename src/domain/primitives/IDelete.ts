import {GUID} from "../model/interfaces/types";

export interface IDelete <T> {
    delete(id: T): number | Promise<number>
}
