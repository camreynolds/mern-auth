const mongoose = require("mongoose")
const Schema = mongoose.Schema

//* bcrypt
const bcrypt = require("bcrypt")

//* validator
const validator = require("validator")

const userSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  }
})

//* signup static funtion

userSchema.statics.signup = async function(email, password){
  if(!email || !password){
    throw Error("All fields must be fill in")
  }

  if(!validator.isEmail(email)){
    throw Error("You must use a valid email")
  }

  if(!validator.isStrongPassword(password)){
    throw Error("You must use a strong password")
  }
  
  const exist = await this.findOne({email})

  if(exist){
    throw Error("this email is already in use")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({email, password: hash})

  return user
}

//* login static function

userSchema.statics.login = async function(email,password){
  if(!email || !password){
    throw Error("All fields must be fill in.")
  }

  if(!validator.isEmail(email)){
    throw Error("Please, use a valid email.")
  }

  const user = await this.findOne({email})

  if(!user){
    throw Error("Incorrect email.")
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error("Incorrect password.")
  }

  return user
}

module.exports = mongoose.model("User", userSchema);