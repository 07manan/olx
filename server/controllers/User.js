import { response } from "express";
import UserModel from "../models/UserModel.js";

export const registerUser = async (req, res) => {
  const user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await user.save();
    res.send("data inserted");
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  UserModel.findOne({ email: req.params.email }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.send(req.params.password === user.password);
    }
  });
};
