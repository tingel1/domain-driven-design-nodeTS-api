import {BaseController} from "../../../base.controller";
import * as express from "express";
import {IBookService} from "../../../../domain/service-interfaces/book/IBookService";

export class DeleteBookController extends BaseController {
    constructor(private bookService: IBookService) {
        super();
    }
    protected async implementation(req: express.Request, res: express.Response): Promise<void | any> {
        try{
            return this.ok(res);
        }catch(error){
            return this.fail(res, error.toString())
        }
    }
}
