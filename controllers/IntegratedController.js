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


export const getIncomeShareholder = async (req,res) => {
  
    model.getIncomeShareholder((err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
            res.send({data : data});
        }
    })
}

export const getIncomeEthnicity = async (req,res) => {
    const data = req.body;
    let ethnicity = data.ethnicity === 1 ? 'White America' :  'African Americans';
    console.log(ethnicity);
    model.getIncomeEthnicity(ethnicity,(err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
           
            res.send({data : data});
        }
    })
}

export const getIncomeEmpPartTime =  async (req,res) => {
  
    model.getIncomeEmpPartTime((err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
           
            res.send({data : data});
        }
    })
}
export const getIncomeEmpFullTime =  async (req,res) => {
  
    model.getIncomeEmpFullTime((err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
           
            res.send({data : data});
        }
    })
}


export const getVacationShareholder = async (req,res) => {
  
    model.getVacationShareholder((err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
           
            res.send({data : data});
        }
    })
}
export const getVacationMale = async (req,res) => {
  
    model.getVacationMale((err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
           
            res.send({data : data});
        }
    })
}
export const getVacationFemale = async (req,res) => {
  
    model.getVacationFemale((err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
           
            res.send({data : data});
        }
    })
}
export const getVacationForEthnicity = async (req,res) => {
    const data = req.body;
    model.getVacationForEthnicity(data,(err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
           
            res.send({data : data});
        }
    })
}

export const getVacationEmpFullTime = async (req,res) => {
  
    model.getVacationEmpFullTime((err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
           
            res.send({data : data});
        }
    })
}
export const getVacationEmpPartTime = async (req,res) => {
  
    model.getVacationEmpPartTime((err,data) => {
        if(err) {
            res.status(404).json({ messages: "BAD REQUEST" });
        }
        else{
            res.send({data : data});
        }
    })
}