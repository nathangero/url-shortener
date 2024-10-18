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
const debugRedirect: { [key: string]: string } = {
  "aHR0cHM6": "https://www.youtube.com/"
}

app.post("/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;
  console.log("slug:", slug);

  if (debugRedirect[slug]) {
    console.log("redirecting user to:", debugRedirect[slug]);
    res.send(debugRedirect[slug]);
  } else {
    res.sendStatus(404);
  }
});


app.post("/newSlug", async (req: Request, res: Response) => {
  const slug = req.params.slug;

  if (db[slug]) {
    res.send(db[slug]);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});