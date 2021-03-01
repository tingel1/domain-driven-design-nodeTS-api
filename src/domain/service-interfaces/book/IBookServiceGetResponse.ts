import {IBookServiceResponse} from "./IBookServiceResponse";
import {IBook} from "../../model/interfaces/IBook";

export interface IBookServiceGetResponse extends IBookServiceResponse {
    books: IBook[]
}
