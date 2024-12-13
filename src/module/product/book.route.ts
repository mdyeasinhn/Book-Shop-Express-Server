// ---> Router <----

import { Router } from "express";
import { bookController } from "./book.controller";




const bookRouter = Router();


bookRouter.post('/create-book', bookController.createBook);
bookRouter.get('/', bookController.getProducts);
bookRouter.get('/:bookId', bookController.getSpecificProduct);
bookRouter.put('/:bookId', bookController.updateBook);
bookRouter.delete('/:bookId', bookController.deleteBook);


export default bookRouter;