import {IBookRepository} from "../../../../domain/interfaces/book/IBookRepository";
import {Book} from "../../../../domain/model/data/book";
import {GUID} from "../../../../domain/model/interfaces/types";
import {IBook} from "../../../../domain/model/interfaces/IBook";

// TODO: Here is the problem, this file is much to big!!!
export class MongoDbBookRepository implements IBookRepository {
    add(model: Book): GUID;
    add(models: Book[]): GUID[];
    add(model: Book | Book[]): GUID | GUID[] {
        return undefined;
    }

    delete(id: GUID): number;
    delete(model: Book): number;
    delete(id: GUID | Book): number {
        return 0;
    }

    get(id: GUID): IBook {
        return undefined;
    }

    getAll(): IBook[] {
        return [];
    }

    getMany(ids: GUID[]): IBook[] {
        return [];
    }

    update(model: Book[]): number {
        return 0;
    }
}
