import { NextPage } from "next"
import Goal from "../components/Goal"
import BMR from "../components/BMR"
import ProtectedRoute from "../components/ProtectedRoute"

const Settings: NextPage = () => {
  //fetch user data

  return (
    <ProtectedRoute>
      <h1>Settings</h1>
      <p>Configure your account</p>
      
      <BMR />
      
      <Goal />      

      <div>
        <button>Update</button>
        <button>Reset</button>
      </div>
    </ProtectedRoute>
  )
}

export default Settings