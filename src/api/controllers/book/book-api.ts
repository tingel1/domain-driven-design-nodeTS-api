import * as express from "express";
import { Router } from "express";
import { createBookController } from "./add-book";
import {deleteBookController} from "./delete-book";
import {getBooksController} from "./get-books";

const bookRouter: Router = Router();

bookRouter.post('/add',
    (req: express.Request, res: express.Response) => createBookController.execute(req, res));
bookRouter.delete('/delete',
    (req: express.Request, res: express.Response) => deleteBookController.execute(req, res));
bookRouter.get('/',
    (req: express.Request, res: express.Response) => getBooksController.execute(req, res));

export { bookRouter };
