import bodyParser from "body-parser";
import express from "express";

import cors from "cors";

import dotevn from "dotenv";
import PersonalRouter from "./routers/PersonalRouter.js";

import EmploymentRouter from "./routers/EmploymentRouter.js";
import HistoryRouter from "./routers/JobHistoryRouter.js";
import IntegratedRouter from "./routers/IntegratedRouter.js";


const app = express();
dotevn.config();

const whitelist = ['http://localhost:3000/', 'http://localhost:8888/','https://shopii.onrender.com/'];
app.use(cors(),bodyParser.json());
app.get('/', (req, res) => {
  const userIP = req.ip;
  console.log(userIP);
  // if (isValidIP(userIP)) {
  //   console.log('Địa chỉ IP của người dùng hợp lệ.');
  //   // Xử lý logic tại đây
  // } else {
  //   console.log('Địa chỉ IP của người dùng không hợp lệ.');
  //   res.status(403).send('Forbidden');
  // }
});

// app.use(authorizationJWT) ;
// app.use("/",ProductRouter)
app.use('/',PersonalRouter)
app.use('/',EmploymentRouter)
app.use('/',HistoryRouter)
app.use('/',IntegratedRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});
