import {Book} from "../model/data/book";
import {IUpdate} from "../common/IUpdate";
import {ICreate} from "../common/ICreate";
import {IDelete} from "../common/IDelete";

export interface IBookCommandRepository extends IUpdate<Book>, ICreate<Book>, IDelete<Book> {
}