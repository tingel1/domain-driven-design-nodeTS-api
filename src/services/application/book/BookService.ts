import {IBookService} from "../../../domain/service-interfaces/book/IBookService";
import {IBookServiceResponse} from "../../../domain/service-interfaces/book/IBookServiceResponse";
import {IBookServiceGetResponse} from "../../../domain/service-interfaces/book/IBookServiceGetResponse";
import {BookServiceGetResponse} from "./BookServiceGetResponse";
import {BookServiceResponse} from "./BookServiceResponse";

export class BookService implements IBookService {
    add(): IBookServiceResponse {
        return new BookServiceResponse().success();
    }

    delete(): IBookServiceResponse {
        return new BookServiceResponse().success();
    }

    get(): IBookServiceGetResponse {

        return new BookServiceGetResponse().success([]);
    }

}
