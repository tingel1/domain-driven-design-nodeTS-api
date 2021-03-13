import {Collection, MongoClient} from "mongodb";
import {IDisposable} from "../../../../domain/primitives/IDisposable";


export class MongoDb implements IDisposable {
    client!: MongoClient;
    collection!: Collection;

    constructor() {
        const uri =
            "mongodb://root:example@localhost:27017/admin";

        this.client = new MongoClient(uri);
    }

    async getCollection(collectionName: string, databaseName: string = 'books'): Promise<MongoDb> {
        await this.client.connect();
        this.collection = await this.client.db(databaseName)
            .collection(collectionName)
        return this;
    }

    dispose(): void {
        if (this.client) {
            this.client.close();
        }
    }
}

