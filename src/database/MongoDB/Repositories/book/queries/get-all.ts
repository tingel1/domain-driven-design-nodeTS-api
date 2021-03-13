import {IBook} from "../../../../../domain/model/interfaces/IBook";
import {using} from "../../../../../domain/primitives/IDisposable";
import {MongoDb} from "../../common/MongoDb";

export class GetAll {
    mongoDb: MongoDb;

    constructor(client: MongoDb) {
        this.mongoDb = client;
    }

    async execute(): Promise<IBook[]> {
        let books: IBook[] = [];
        await using(await this.mongoDb.getCollection('book-store') ,
            async (instance: MongoDb) => {
            books = await instance.collection.find({}).toArray();
        })
        return books
    }
}
