import { NextPage } from "next"
import Layout from '../components/organisms/Layout';
import UserDataForm from '../components/organisms/UserDataForm'

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