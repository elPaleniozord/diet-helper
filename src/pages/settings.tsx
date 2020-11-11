import { NextPage } from "next"
import Goal from "../components/Goal"
import BMRCalculator from "../components/BRMCalculator"
import ProtectedRoute from "../components/ProtectedRoute"
import { useEffect, useReducer, useState } from "react"

const Settings: NextPage = (props) => {
  useEffect(()=>{
    const data = fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({query: '{settingsFetch {id}}'})
  })
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])
  return (
    <ProtectedRoute>
      <h2>Settings</h2>
      <p>Welcome {'USER_NAME'}</p>
      
    </ProtectedRoute>
  )
}

export default Settings