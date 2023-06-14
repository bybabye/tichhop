import express from "express";

import { getIncomeEmpFullTime, getIncomeEmpPartTime, getIncomeEthnicity, getIncomeGender, getIncomeShareholder, getVacationEmpFullTime, getVacationEmpPartTime, getVacationFemale, getVacationForEthnicity, getVacationMale, getVacationShareholder } from "../controllers/IntegratedController.js";



const IntegratedRouter = express.Router();




IntegratedRouter.post('/integrated/gender',getIncomeGender);
IntegratedRouter.post('/integrated/ethnicity',getIncomeEthnicity);
IntegratedRouter.post('/integrated/vacation/ethnicity',getVacationForEthnicity);
IntegratedRouter.get('/integrated/shareholder',getIncomeShareholder);
IntegratedRouter.get('/integrated/fullTime',getIncomeEmpFullTime);
IntegratedRouter.get('/integrated/partTime',getIncomeEmpPartTime);
IntegratedRouter.get('/integrated/vacation/shareholder',getVacationShareholder);
IntegratedRouter.get('/integrated/vacation/male',getVacationMale);
IntegratedRouter.get('/integrated/vacation/female',getVacationFemale);
IntegratedRouter.get('/integrated/vacation/fulltime',getVacationEmpFullTime);
IntegratedRouter.get('/integrated/vacation/parttime',getVacationEmpPartTime);
export default IntegratedRouter;