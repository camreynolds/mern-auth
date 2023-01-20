require("dotenv").config()

const express = require("express")
const workoutRoutes = require("./routes/workouts")

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

// listening for request
app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000");
})