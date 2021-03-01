import {BaseController} from "../../../base.controller";
import * as express from "express";
import {IBookService} from "../../../../domain/service-interfaces/book/IBookService";
import {IBookServiceGetResponse} from "../../../../domain/service-interfaces/book/IBookServiceGetResponse";

export class GetBooksController extends BaseController {
    constructor(private bookService: IBookService) {
        super();
    }

    // TODO: Easy to test because controllers are small
    protected async implementation(req: express.Request, res: express.Response): Promise<void | any> {
        try{
            const serviceResponse: IBookServiceGetResponse = this.bookService.get();
            if(!serviceResponse.isSuccess){
                return this.clientError(res);
            }

            return this.ok(res, serviceResponse.books);
        }catch(error){
            return this.fail(res, error.toString())
        }
    }
}
