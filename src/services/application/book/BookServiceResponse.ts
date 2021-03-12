import {IBookServiceResponse} from "../../../domain/service-interfaces/book/IBookServiceResponse";
import {ErrorCodes} from "../../enums/ErrorCodes";
import {IResponseBuilder} from "../../interfaces/IResponseBuilder";

export class BookServiceResponse implements IBookServiceResponse, IResponseBuilder<any> {
    errorCode!: ErrorCodes;
    errorMessage!: string;
    isSuccess!: boolean;

    error(code: ErrorCodes, message: string) {
        this.errorCode = code;
        this.errorMessage = message
        this.isSuccess = true;
        return this;
    }

    success(payload?: any) {
        this.errorCode = ErrorCodes.OK;
        this.errorMessage = ""
        this.isSuccess = true;
        return this;
    }
}
