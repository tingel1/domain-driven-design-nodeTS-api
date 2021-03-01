import {IBookService} from "../../../domain/service-interfaces/book/IBookService";
import {IBookServiceResponse} from "../../../domain/service-interfaces/book/IBookServiceResponse";
import {IBookServiceGetResponse} from "../../../domain/service-interfaces/book/IBookServiceGetResponse";
import {BookServiceGetResponse} from "./BookServiceGetResponse";
import {BookServiceResponse} from "./BookServiceResponse";
import {IBookRepository} from "../../../domain/interfaces/book/IBookRepository";
import {IBook} from "../../../domain/model/interfaces/IBook";

export class BookService implements IBookService {
    constructor(private bookRepository: IBookRepository) {
    }

    add(): IBookServiceResponse {
        return new BookServiceResponse().success();
    }

    delete(): IBookServiceResponse {
        return new BookServiceResponse().success();
    }

    get(): IBookServiceGetResponse {
        const books: IBook[] =  this.bookRepository.getAll();
        return new BookServiceGetResponse().success(books);
    }
}
