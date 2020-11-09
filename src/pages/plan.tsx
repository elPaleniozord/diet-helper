import { NextPage } from "next"
import ProtectedRoute from "../components/ProtectedRoute"

const Plan: NextPage = () => {
  return (
    <ProtectedRoute>
      <h1>Meal Planner</h1>
      <p>Automate your diet</p>
    </ProtectedRoute>
  )
}

export default Plan