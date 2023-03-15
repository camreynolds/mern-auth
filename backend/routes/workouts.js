const express = require("express")
const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require("../controllers/workoutController")

//* middelware
const requireAuth = require("../middleware/requireAuth")

const router = express.Router()

//* require Auth for all the users
router.use(requireAuth)

// GET all workouts
router.get("/", getWorkouts)

// GET a single workout
router.get("/:id", getWorkout)

// POST a new workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", deleteWorkout)

// POST a new workout
router.patch("/:id", updateWorkout)

module.exports = router