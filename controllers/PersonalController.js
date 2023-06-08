import { Personal } from "../models/PersonalModel.js";

var model = new Personal();
export const getPersonalList = async (req, res) => { // get api
  model.getList((error, data) => { // result = (error,data)
    if (error) { 
      console.log(error);
      res.status(404).json({ messages: "BAD REQUEST" });
    } else {
      res.send({ data: data });
    }
  });
};
