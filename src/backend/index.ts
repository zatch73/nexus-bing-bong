import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const os = require('node:os');
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const hostname = os.arch();
const serversRouter = require("./routes/servers-router");

app.use("/servers", serversRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server 2 "+hostname);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});