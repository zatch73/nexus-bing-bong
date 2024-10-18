import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Database from './config/database';
const os = require('node:os');
dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

const serversRouter = require("./routes/servers-router");

app.use("/servers", serversRouter);

app.get("/", async (req: Request, res: Response) => {
  const conn = Database.getInstance().getConnection();
  res.json({ status: "success", message: "server is running", test: await conn.databaseVersion() } );
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});