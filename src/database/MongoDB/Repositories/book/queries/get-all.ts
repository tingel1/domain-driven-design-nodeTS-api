import {IBook} from "../../../../../domain/model/interfaces/IBook";
import {MongoClient, Collection} from "mongodb";
import {IDisposable} from "../../../../../domain/primitives/IDisposable";

export class GetAll implements IDisposable {
    client!: MongoClient;
    collection!: Collection

    async instance () {
        const uri =
            "mongodb://root:example@localhost:27017/admin";

        this.client = new MongoClient(uri);
        await this.client.connect();
        this.collection = await this.client.db('books').collection('book-store')
        return this;
    }

    async execute(): Promise<IBook[]> {
        const response = await this.collection.find({}).toArray();
        return Promise.resolve(response);
    }

    dispose(): void {
        if (this.client) {
            this.client.close();
        }
    }
}
