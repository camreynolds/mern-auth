const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

// GET all workouts
const getWorkouts = async (req,res) => {
  const user_id = req.user._id

  try {
    const workout = await Workout.find({user_id}).sort({createdAt: -1})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

// GET a single workout
const getWorkout = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such a workout"})
  }

  const workout = await Workout.findById(id)

  if(!workout) {
    return res.status(404).json({error: "No such workout"})
  }

  res.status(200).json(workout)
}

// POST / CREATE a single workout
const createWorkout = async (req,res) => {
  const {title,reps,load} = req.body

  const emptyFields = []

  if(!title){
    emptyFields.push("title")
  }
  
  if(!reps){
    emptyFields.push("reps")
  }
  
  if(!load){
    emptyFields.push("load")
  }

  if(emptyFields.length > 0){
    return res.status(404).json({error: "Please fill in all the fields", emptyFields})
  }

  try {
    const user_id = req.user._id
    const workout = await Workout.create({title,reps,load,user_id})
    res.status(200).json(workout)
  }
  catch (error) {
    res.status(400).json({error: error.message})
  }
}

// DELETE a single workout
const deleteWorkout = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Not such workout"})
  }

  const workout = await Workout.findByIdAndDelete({_id: id})

  if(!workout){
    return res.status(400).json({error: "Not such workout"})
  }

  res.status(200).json(workout)
}

// PATCH / UPDATE a single workout
const updateWorkout = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "Not such workout"})
  }

  const workout = await Workout.findByIdAndUpdate({_id:id},{
    ...req.body
  })

  if(!workout){
    return res.status(400).json({error: "Not such workout"})
  }

  res.status(200).json(workout)
}

module.exports = {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout}