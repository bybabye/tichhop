import express from "express";
import { getJobHistorys } from "../controllers/JobHistoryController.js";




const HistoryRouter = express.Router();




HistoryRouter.get('/jobHistory',getJobHistorys);

export default HistoryRouter;