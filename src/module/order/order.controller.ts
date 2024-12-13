import { Request, Response } from "express";
import { orderService } from "./order.service";


const createOrder = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const result = await orderService.createOrder(order);

        res.json({
            status: true,
            message: "Order created successfully",
            data: result,
        });
    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
}

export const orderController ={
    createOrder,
    
}