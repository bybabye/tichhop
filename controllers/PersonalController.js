
import { Personal } from "../models/PersonalModel.js";

var model = new Personal();
export const getPersonalList = async (req, res) => {
  // get api
  await model.getList((error, data) => {
    // result = (error,data) là 1 callback function
    if (error) {
      console.log(error);
      res.status(404).json({ messages: "BAD REQUEST" });
    } else {
      res.send({ data: data });
    }
  });
};

export const add = async (req, res) => {
  console.log(req.body);
  await model.addPersonal(req.body, (error, data) => {
    if (error) {
      console.log(error);
      res.status(404).json({ messages: "BAD REQUEST" });
    } else {
      res.send({ data: data });
    }
  });
};


