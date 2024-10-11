import express, { Express, Request, Response } from "express";

const serverRouter: Express = express();


serverRouter.get("/servers", (req: Request, res: Response) => {
    res.send("Server Router");
});

serverRouter.get("/servers/:id", (req: Request, res: Response) => {
    res.send("Server Router");
});

serverRouter.post("/servers", (req: Request, res: Response) => {
    res.send("Servers");
});

serverRouter.put("/servers/:id", (req: Request, res: Response) => {
    res.send("Servers");
});

serverRouter.delete("/servers/:id", (req: Request, res: Response) => {
    res.send("Servers");
});

module.exports = serverRouter;
