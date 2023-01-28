import {useContext} from "react"
import { WorkoutsContext } from "./frontend/src/context/WorkoutContext"

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext)

  if(!context){
    throw Error("useWorkoutContext must be used inside a WorkoutContext")
  }

  return context
}