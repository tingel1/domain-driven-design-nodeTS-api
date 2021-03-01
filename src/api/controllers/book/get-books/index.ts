import {GetBooksController} from "./get-books.controller";
import {IBookService} from "../../../../domain/service-interfaces/book/IBookService";
import {BookService} from "../../../../services/application/book/BookService";

const bookService: IBookService = new BookService();
const getBooksController = new GetBooksController(bookService);

export { getBooksController }
