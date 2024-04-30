import express, { Express, Request, Response } from "express";
import cors from "cors";
import { MyTwitter } from "./types";
const app = express();
const port = 3001;

app.use(cors({ origin: "http://localhost:3000" }));

const sampleData = [
    { id: 1, text: "牛乳を買う"},
    { id: 2, text: "洗濯をする"},
    { id: 3, text: "請求書を支払う"},
];

let myTwitterList: MyTwitter[] = sampleData;

app.get("/", (req: Request, res: Response) => {
    res.json(myTwitterList);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});