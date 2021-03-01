import express from 'express';
import {bookRouter} from "./api/controllers/book/book-api";

const app = express();

app.use('/book', bookRouter)

const port: string | number = process.env.PORT || 3020

app.listen(port, ()=>console.log(`server started on port ${port}`))


