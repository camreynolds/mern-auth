require("dotenv").config()

const express = require("express")

// express app
const app = express() // This is a function that I just invoque and create an express app for us and is inside the app const.

// middleware
app.use( (req,res,next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get("/",(req,res) => {
  res.json({mssg: "Welcome to the app"})
})

// listening for request
app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000");
})