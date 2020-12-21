import express, { Request, Response } from "express";
import dotenv from "dotenv"
import path from "path"

dotenv.config();

const app = express();
const port = process.env.PORT;


app.get("/api", (req: Request, res: Response): void => {
    console.log("api");
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})