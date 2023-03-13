//* schema
const User = require("../models/userModel")

//* jsonwebtoken
const jwt = require("jsonwebtoken")

//* create token custom function
const createToken = (_id) =>{
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: "10m"})
}

//* login user
const login = async (req,res) => {
  const {email,password} = req.body

  try {
    const user = await User.login(email,password)

    //* generate token
    const token = createToken(user._id)

    res.status(200).json({email,token})

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

//* signup user
const signup = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email,password)

    //* create token
    const token = createToken(user._id)
    
    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {login,signup}