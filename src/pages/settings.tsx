import { NextPage } from "next"
import UserDataForm from '../components/UserDataForm'
import { useEffect, useReducer, useState } from "react"
import Layout from '../components/Layout'

const Settings: NextPage = (props) => {
  useEffect(()=>{
    const data = fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({query: '{settingsFetch {id, email, role}}'})
  })
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])

  return (
    <Layout>
      <h2>Settings</h2>
      <p>Welcome {props.session.user.name}</p>
      <UserDataForm /> 
    </Layout>
  )
}

export default Settings