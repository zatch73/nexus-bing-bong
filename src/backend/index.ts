import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const os = require('node:os');
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const hostname = os.arch();

const serversRouter = require("./routes/servers-router");

const User = require('./config/database')

app.use("/servers", serversRouter);

app.get("/", async (req: Request, res: Response) => {
  
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });
  
  const users = await User.findAll();
  res.send(users);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});