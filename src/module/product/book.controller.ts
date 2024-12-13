import { Request, Response } from "express";
import { bookService } from "./book.service";


// ----> Create Book controller <----
const createBook = async (req: Request, res: Response) => {
    try {
        const payload = req.body;

        const result = await bookService.createBook(payload);

        res.json({
            status: true,
            message: "Product created successfully",
            data: result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
      
    }
};


const getProducts = async (req: Request, res: Response) => {
    try {
        const result = await bookService.getProducts()
        res.json({
            message: "Books geting successfully",
             result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
      
    }
};

// ----> Get single Product controller <----
const getSpecificProduct = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.id;
        const result = await bookService.getSpecificProduct(bookId)
        res.json({
            message: "Specific book geting successfully",
             result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
};


// ----> Update user controller <----
const updateBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const body = req.body

        const result = await bookService.updateBook(bookId, body)
        res.json({
            message: "User updated successfully",
             result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
};
// ----> Delete user controller <----

const deleteBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
             await bookService.deleteBook(bookId)
        res.json({
            message: "User deleted successfully",
             result:{},
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
};


// ----> export <----
export const bookController ={
    createBook,
    getProducts,
   getSpecificProduct,
   updateBook,
   deleteBook,
}