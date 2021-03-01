import {ErrorCodes} from "../../../services/enums/ErrorCodes";

export interface IError {
    errorMessage: string;
    errorCode: ErrorCodes;
}
