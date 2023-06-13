import express from "express";

import { getIncomeGender } from "../controllers/IntegratedController.js";



const IntegratedRouter = express.Router();




IntegratedRouter.post('/integrated/gender',getIncomeGender);

export default IntegratedRouter;