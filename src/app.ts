import express, {Request, Response, NextFunction} from "express";
import getUserTweets from "./getTweets";

require("dotenv").config();
const fs = require("fs");
const CryptoJS = require("crypto-js");
const hmacSHA256 = require("crypto-js/hmac-sha256");
const app = require("express")();

app.use(express.json());

app.post("/authorize", (req: Request, res: Response, next: NextFunction) => {
  const signature = req.headers["x-commercelayer-signature"];
  const hash = hmacSHA256(
    JSON.stringify(req.body),
    process.env.CL_SHARED_SECRET
  );
  res.status(200).send(hash.toString());
  const encode = hash.toString(CryptoJS.enc.Base64);
  if (req.method === "POST" && signature === encode) {
    const payload = req.body;
    console.log(payload);
    // testing
    const orderNumber = "123456789";

    getUserTweets().then((tweets) => {
      tweets.forEach((tweet) => {
        if (tweet.text.includes(orderNumber)) {
          console.log(tweet.text);
          return true;
        } else {
          return false;
        }
      });
    });
  } else {
    res.status(401).json({
      error: "Unauthorized: Invalid signature",
    });
  }
});

app.post("/capture", (req: Request, res: Response) => {
  console.log(req.body);
});

app.post("/void", (req: Request, res: Response) => {
  console.log(req.body);
});

app.post("/refund", (req: Request, res: Response) => {
  console.log(req.body);
});

app.post("/token", (req: Request, res: Response) => {
  console.log(req.body);
});

app.listen(() => {
  console.log(`Listening at http://localhost:${process.env.PORT || 8000}`);
});
