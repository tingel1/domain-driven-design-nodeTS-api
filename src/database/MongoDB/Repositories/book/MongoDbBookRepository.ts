import {IBookRepository} from "../../../../domain/interfaces/book/IBookRepository";
import {GUID} from "../../../../domain/model/interfaces/types";
import {IBook} from "../../../../domain/model/interfaces/IBook";
import {Book} from "../../../../domain/model/data/book";
import {Identity} from "../../../../domain/model/data/Identity";
import {GetAll} from "./queries/get-all";
import {using} from "../../../../domain/primitives/IDisposable";
import {MongoDb} from "../common/MongoDb";


// TODO: Here is the problem, this file is much to big!!!
export class MongoDbBookRepository implements IBookRepository {
    constructor() {
    }

    async add(model: IBook): Promise<GUID> {
        return Promise.resolve('to implement');
    }

    async addMany(models: IBook[][]): Promise<GUID[]> {
        return [];
    }

    async delete(id: GUID): Promise<number> {
        return Promise.resolve(123);
    }

    async get(id: GUID): Promise<IBook> {
        return Promise.resolve(new Book('12',
            new Identity('123', '34'),
            '123', '123', '123', '123'));
    }

    async getAll(): Promise<IBook[]> {
        return await new GetAll(new MongoDb()).execute();
    }

    async getMany(ids: GUID[]): Promise<IBook[]> {
        return Promise.resolve([]);
    }

    async update(model: IBook[][]): Promise<number> {
        return Promise.resolve(123);
    }
}
