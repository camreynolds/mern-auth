const mongoose = require("mongoose")
const Schema = mongoose.Schema

//* bcrypt
const bcrypt = require("bcrypt")

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
  const exist = await this.findOne({email})

  if(exist){
    throw Error("this email is already in use")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({email, password: hash})

  return user
}

module.exports = mongoose.model("User", userSchema);