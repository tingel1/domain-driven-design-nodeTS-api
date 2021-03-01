import {DeleteBookController} from "./delete-book.controller";
import {IBookService} from "../../../../domain/service-interfaces/book/IBookService";
import {BookService} from "../../../../services/application/book/BookService";

const bookService: IBookService = new BookService();
const deleteBookController = new DeleteBookController(bookService);

export { deleteBookController }
