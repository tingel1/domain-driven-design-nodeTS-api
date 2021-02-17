import { exampleController } from "../controllers/example";

import * as express from "express";
import { Router } from "express";
const exampleRouter: Router = Router();

exampleRouter.post('/add',
    (req: express.Request, res: express.Response) => exampleController.execute(req, res));

export { exampleRouter };