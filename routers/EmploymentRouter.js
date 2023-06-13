import express from "express";
import { add, autoData } from "../controllers/EmploymentControllers.js";



const EmploymentRouter = express.Router();



EmploymentRouter.post('/employment/add',add);
EmploymentRouter.get('/employment/add/auto',autoData);

export default EmploymentRouter;