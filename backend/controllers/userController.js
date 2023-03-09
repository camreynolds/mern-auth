//* schema
const User = require("../models/userModel")

//* login user
const login = (req,res) => {
  res.status(200).json({mssg: "login user"})
}

//* signup user
const signup = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email,password)
    res.status(200).json({email, user})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {login,signup}