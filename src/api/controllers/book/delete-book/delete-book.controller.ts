import {BaseController} from "../../../base.controller";
import * as express from "express";

export class DeleteBookController extends BaseController {
    protected async implementation(req: express.Request, res: express.Response): Promise<void | any> {
        try{
            return this.ok(res);
        }catch(error){
            return this.fail(res, error.toString())
        }
    }
}
