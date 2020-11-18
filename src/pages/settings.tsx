import { NextPage } from "next"
import UserDataForm from '../components/UserDataForm'
import Layout from '../components/Layout'
import { gql, useQuery} from '@apollo/client'

const FETCH_SETTINGS = gql`
  query {
    fetchSettings {
      id
    }
  }
`

const Settings: NextPage = (props) => {
  //const {data,loading, error} = useQuery(FETCH_SETTINGS)
  return (
    <Layout>
      <h2>Settings</h2>
      <p>Welcome {props.session.user.name}</p>
      <UserDataForm /> 
    </Layout>
  )
}

export default Settings