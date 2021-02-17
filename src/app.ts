import express from 'express';
import {exampleRouter} from "./api/domains/create-exmaple";

const app = express();

app.use('/example', exampleRouter)


const port: string | number = process.env.PORT || 3020

app.listen(port, ()=>console.log(`server started on port ${port}`))


