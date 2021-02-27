import * as express from 'express'
import {StatusCodes, ReasonPhrases} from "http-status-codes";

export abstract  class BaseController {
  protected abstract implementation (req: express.Request, res: express.Response): Promise<void | any>

  public async execute (req: express.Request, res: express.Response): Promise<void> {
    try {
      await this.implementation(req, res);
    } catch (err) {
      console.log(err);
      this.fail(res, ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  }

  public static jsonResponse (res: express.Response, code: number, message: string) {
    return res.status(code).json({ message })
  }

  public ok<T> (res: express.Response, value?: T){
    if(value){
      res.type('application/json');
      return res.sendStatus(StatusCodes.OK).json(value);
    }

    return res.sendStatus(StatusCodes.OK);
  }

  public created(res: express.Response){
    return res.sendStatus(StatusCodes.CREATED);
  }

  public clientError (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, StatusCodes.BAD_REQUEST, message ? message : ReasonPhrases.BAD_REQUEST);
  }

  public unauthorized (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, StatusCodes.UNAUTHORIZED, message ? message : ReasonPhrases.UNAUTHORIZED);
  }

  public notFound (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, StatusCodes.NOT_FOUND, message ? message : ReasonPhrases.NOT_FOUND);
  }


  public fail (res: express.Response, error: Error | string) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.toString()
    })
  }
}