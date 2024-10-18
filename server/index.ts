"use strict";
import express, { Request, Response } from "express";
import cors from "cors";
// const routes = require("./api");

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript server!');
});

const db: { [key: string]: string } = {};

app.post("/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;

  if (db[slug]) {
    res.send(db[slug]);
  } else {
    res.send(404);
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});