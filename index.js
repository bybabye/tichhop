import bodyParser from "body-parser";
import express from "express";

import cors from "cors";

import dotevn from "dotenv";
import PersonalRouter from "./routers/PersonalRouter.js";


const app = express();
dotevn.config();

const whitelist = ['http://localhost:3000/', 'http://localhost:8888/','https://shopii.onrender.com/'];
app.use(cors(),bodyParser.json());

// app.use(authorizationJWT) ;
// app.use("/",ProductRouter)
app.use('/',PersonalRouter)
app.listen(process.env.PORT || 8888, () => {
  console.log("server is running");
});
