import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRouter from "./module/product/book.route";
const app: Application = express();


//parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', userRouter)

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "server Live",
  });
});

console.log(process.cwd());

export default app;
