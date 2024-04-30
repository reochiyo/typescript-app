import express, { Express, Request, Response } from "express";
import cors from "cors";
import { MyTwitter } from "./types";
import mysql from "mysql2/promise";
const app = express();
const port = 3001;

app.use(cors({ origin: "http://localhost:3000" }));

let myTwitterList: MyTwitter[] = [];

async function main() {
    const con = await mysql.createConnection({
        host: "172.29.0.2", //dockerのMySQLコンテナのIPアドレス
        user: "root",
        password: "root",
        database: "typescript_app_db",
    });
    const [rows] = await con.execute('SELECT * FROM texts');
    console.log(rows);
    await con.end();
    return rows as MyTwitter[];
}

app.get("/", async (req: Request, res: Response) => {
    try {
        myTwitterList = await main();
        res.status(200).json(myTwitterList);
    } catch (error) {
        console.log(error);
        res.status(500).json(null);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});