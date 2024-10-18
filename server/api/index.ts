"use strict";
const router = require("express").Router();
import { Request, Response } from "express";

const db: { [key: string]: string } = {};

router.post("/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;

  if (db[slug]) {
    res.send(db[slug]);
  } else {
    res.send(404);
  }
})

export = { router };
