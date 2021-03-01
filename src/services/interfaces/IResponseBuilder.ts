import {ErrorCodes} from "../enums/ErrorCodes";

export interface IResponseBuilder<T> {
    success(payload?: T);
    error(code: ErrorCodes, message: string);
}
