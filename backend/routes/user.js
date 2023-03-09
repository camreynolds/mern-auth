const express = require("express")
const route = express.Router()

//* controllers
const {login, signup} = require("../controllers/userController")

//* login endpoint
route.post("/login", login)

//* signup endpoint
route.post("/signup", signup)

module.exports = route