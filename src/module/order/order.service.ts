import Book from "../product/book.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";


const createOrder = async (payload: IOrder): Promise<IOrder> => {
    const { product, quantity } = payload;

    const bookData = await Book.findById(product);

    if (!bookData) {
        throw new Error("Book not found")
    }

    if (bookData.quantity < quantity) {
        throw new Error('Insufficient stock')
    }

    bookData.quantity -= quantity
    bookData.inStock = bookData.quantity > 0
    await bookData.save()


    const order = await Order.create(payload)
    return order
}

export const orderService = {
    createOrder,
}
