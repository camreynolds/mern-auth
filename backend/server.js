require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

//* endpoints
const workoutRoutes = require("./routes/workouts")
const userRoutes = require("./routes/user")

// express app
const app = express() // This is a function that I just invoque and create an express app for us and is inside the app const.

// middleware
app.use(express.json()) // If the request has a body (data) it attached to the request object to has access.

app.use( (req,res,next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/workouts", workoutRoutes)
app.use("/api/users", userRoutes)

// connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then( () => {
    // listening for request
    app.listen(process.env.PORT, () => {
      console.log("connecting to db & istening on port", process.env.PORT)
    })
  })
  .catch( error => {
    console.log(error);
  })