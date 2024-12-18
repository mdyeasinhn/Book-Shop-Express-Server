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
            message: "Books retrieved successfully",
            data : result,
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
        const bookId = req.params.bookId;
        console.log(req.params);
        const result = await bookService.getSpecificProduct(bookId);

        res.json({
            message: "Book retrieved successfully",
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


// ----> Update Book controller <----
const updateBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const body = req.body;
               

        const result = await bookService.updateBook(bookId, body)
        res.json({
            message: "Book updated successfully",
            data : result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
};
// ----> Delete Book controller <----

const deleteBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        await bookService.deleteBook(bookId)
        res.json({
            message: "Book deleted successfully",
            result: {},
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
export const bookController = {
    createBook,
    getProducts,
    getSpecificProduct,
    updateBook,
    deleteBook,
}