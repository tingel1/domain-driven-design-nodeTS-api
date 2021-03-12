import {IBookServiceResponse} from "./IBookServiceResponse";
import {IBookServiceGetResponse} from "./IBookServiceGetResponse";
import {IBook} from "../../model/interfaces/IBook";

export interface IBookService {
    add(book: IBook): Promise<IBookServiceResponse>
    delete(books: IBook[]): Promise<IBookServiceResponse>
    get(): Promise<IBookServiceGetResponse>
}

