import { NextPage } from "next"
import ProtectedRoute from "../components/ProtectedRoute"

const Plan: NextPage = () => {
  return (
    <ProtectedRoute>
      <h1>Recipes</h1>
      <p>Browse available recipes or add your own</p>
    </ProtectedRoute>
  )
}

export default Plan