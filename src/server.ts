import express, { request } from "express";
import { Request, Response } from "express";
const app = express();

console.clear();



app.get("/", (request: Request, response: Response) => {
    response.send("Hello World com ts-node-dev teste");
});

app.listen(3000, ()=>{
    console.log("O servidor está rodando...")
})