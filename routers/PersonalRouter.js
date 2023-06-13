import express from "express";
import { add, getPersonalList } from "../controllers/PersonalController.js";


const PersonalRouter = express.Router();


PersonalRouter.get('/personal',getPersonalList);
PersonalRouter.post('/personal/add',add);



export default PersonalRouter;