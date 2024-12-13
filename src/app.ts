import express, { Application, Request, Response } from "express";
import cors from "cors";
import bookRouter from "./module/product/book.route";
import orderRouter from "./module/order/order.route";

const app: Application = express();


//parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', bookRouter)
app.use('/api/orders', orderRouter)

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "server Live",
  });
});

console.log(process.cwd());

export default app;
