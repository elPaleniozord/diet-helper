import { NextPage } from "next"
import Goal from "../components/Goal"
import BMRCalculator from "../components/BRMCalculator"
import ProtectedRoute from "../components/ProtectedRoute"
import { useReducer, useState } from "react"

const settingsReducer = () => {

}

const initialSettings = {
  user: 'Unknown',
  base: {
    age: 0,
    gender: '',
    height: 0,
    weight: 0
  },
  bmr: 0,
  tdee: 0,
  goals: {
    type: 'cutting',
    carb: 0,
    fats: 0,
    kcal: 0,
    prot: 0
  }
}

const Settings: NextPage = () => {
  //const [state, dispatch] = useReducer(settingsReducer, initialSettings)
  return (
    <ProtectedRoute>
      
    </ProtectedRoute>
  )
}

export default Settings