import {IBookServiceGetResponse} from "../../../domain/service-interfaces/book/IBookServiceGetResponse";
import {IBook} from "../../../domain/model/interfaces/IBook";
import {IResponseBuilder} from "../../interfaces/IResponseBuilder";
import {ErrorCodes} from "../../enums/ErrorCodes";

export class BookServiceGetResponse implements IBookServiceGetResponse, IResponseBuilder<IBook[]> {
    books!: IBook[];
    errorCode!: ErrorCodes;
    errorMessage!: string;
    isSuccess: boolean = false;

    error(code: ErrorCodes, message: string) {
        this.books = [];
        this.errorCode = code;
        this.errorMessage = message
        this.isSuccess = true;
        return this;
    }

    success(payload: IBook[]) {
        this.books = [...payload];
        this.errorCode = ErrorCodes.OK;
        this.errorMessage = ""
        this.isSuccess = true;
        return this;
    }

}
