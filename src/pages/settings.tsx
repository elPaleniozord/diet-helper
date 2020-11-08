import { NextPage } from "next"
import ProtectedRoute from "../components/ProtectedRoute"

const Settings: NextPage = () => {
  //fetch user data

  return (
    <ProtectedRoute>
      <h1>Settings</h1>
      <p>Configure your account</p>
    </ProtectedRoute>
  )
}

export default Settings