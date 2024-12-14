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

const revenueCalculate = async (req: Request, res: Response): Promise<void> => {
    try {
        const revenue = await orderService.revenueCalculate()

        res.json({
            message: 'Revenue calculated successfully',
            status: true,
            data: revenue
        })
    } catch (error) {
        res.json({
            message: 'Failed to calculate revenue',
            status: false,
            error,
        })
    }
}

export const orderController = {
    createOrder,
    revenueCalculate,

}