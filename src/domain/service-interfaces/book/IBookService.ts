import {IBookServiceResponse} from "./IBookServiceResponse";
import {IBookServiceGetResponse} from "./IBookServiceGetResponse";
import {IBook} from "../../model/interfaces/IBook";

export interface IBookService {
    add(book: IBook): IBookServiceResponse
    delete(books: IBook[]): IBookServiceResponse
    get(): IBookServiceGetResponse
}
