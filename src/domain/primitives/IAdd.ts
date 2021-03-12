import { GUID } from "../model/interfaces/types";

export interface IAdd<T> {
    add(model: T): GUID | Promise<GUID>
}
