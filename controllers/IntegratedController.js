import { IntegratedModel } from "../models/IntegratedModel.js";

var model = new IntegratedModel();



export const getIncomeGender = async (req,res) => {
    const data = req.body;
    model.getInComeGender(data,(err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
            res.send({data : data});
        }
    })
}