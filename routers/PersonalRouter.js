import express from "express";
import { getPersonalList } from "../controllers/PersonalController.js";


const PersonalRouter = express.Router();


PersonalRouter.get('/personal',getPersonalList);


export default PersonalRouter;