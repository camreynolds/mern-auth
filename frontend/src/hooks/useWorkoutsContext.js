import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if(!context){
    throw Error("WorkoutsContext must be used inside an WorkoutContextProvider")
  }

  return context
}

export default useWorkoutsContext