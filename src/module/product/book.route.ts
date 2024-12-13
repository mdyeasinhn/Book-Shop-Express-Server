// ---> Router <----

import { Router } from "express";
import { bookController } from "./book.controller";




const bookRouter = Router();


bookRouter.get('/', bookController.getProducts);
bookRouter.post('/create-book', bookController.createBook);
bookRouter.get('/:bookId', bookController.getSpecificProduct);
bookRouter.put('/:bookId', bookController.updateBook);
bookRouter.put('/:bookId', bookController.deleteBook);


export default bookRouter;