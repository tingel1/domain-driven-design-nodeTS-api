import {IBookService} from "../../../domain/service-interfaces/book/IBookService";
import {IBookServiceResponse} from "../../../domain/service-interfaces/book/IBookServiceResponse";
import {IBookServiceGetResponse} from "../../../domain/service-interfaces/book/IBookServiceGetResponse";
import {BookServiceGetResponse} from "./BookServiceGetResponse";
import {BookServiceResponse} from "./BookServiceResponse";
import {IBookRepository} from "../../../domain/interfaces/book/IBookRepository";

export class BookService implements IBookService {
    constructor(private bookRepository: IBookRepository) {
    }

    add(): Promise<IBookServiceResponse> {
        return Promise.resolve(new BookServiceResponse().success());
    }

    delete(): Promise<IBookServiceResponse> {
        return Promise.resolve(new BookServiceResponse().success());
    }

    async get(): Promise<IBookServiceGetResponse> {
        const books: any =  await this.bookRepository.getAll();
        return new BookServiceGetResponse().success(books);
    }
}
