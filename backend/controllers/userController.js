//* schema
const User = require("../models/userModel")

//* login user
const login = (req,res) => {
  res.status(200).json({mssg: "login user"})
}

//* signup user
const signup = (req, res) => {
  res.status(200).json({mssg: "signup user"})
}

module.exports = {login,signup}