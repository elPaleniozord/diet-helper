import {useRecoilState} from 'recoil'
import {settingsState} from '../../lib/recoil/recoilSettings'
import Goal from '../atoms/Goal'
import IndexCalculator from '../atoms/IndexCalculator'

import { gql, useMutation } from '@apollo/client'

const UPDATE_SETTINGS = gql`
  mutation updateSettings($input: SettingsInput!) {
    updateSettings(input: $input) {
      type
      text
    }
  }
`

const UserDataForm = (): JSX.Element => {
  const [settings, setSettings] = useRecoilState(settingsState)
  const [updateSettings, {loading, error}] = useMutation(UPDATE_SETTINGS, {
    onCompleted({}){
      console.log('complete')
    },
    onError: (err)=> {
      err.graphQLErrors.map(({message}, i) => {
        console.log(message)
      })
    }
  })
  const handleForm = (e): void => {
    e.preventDefault()
    console.log(settings)
    updateSettings({variables: {input: settings}})
  }

  const handleChange = (e) => {
    const {name, value, type} = e.target

    setSettings(settings => {
      return {...settings, [name]: type==='number' ? parseFloat(value) : value} //ensure proper type, otherwise prisma wont be happy
    })
  }

  return (
    <form>
      <h3>Basic Informations</h3>
      <div>
        <label>Gender</label>
        <select name="gender" id='gender' onChange={handleChange} value={settings.gender}>
          <option>Female</option>
          <option>Male</option>
        </select>

        <label>Age</label>
        <input name='age' type='number' onChange={handleChange} value={settings.age} />

        <label>Height</label>
        <input name='height' type='number' onChange={handleChange} value={settings.height} />

        {/*Add time stamp to weight*/}
        <label>Weight</label>
        <input name='weight' type='number' onChange={handleChange} value={settings.weight} />
      </div>

      <h3>Goals</h3>
      <div>
        <Goal />

        <label>Activity Level
          {/* <Tooltip text="Try your best to estimate your daily level of activity." /> */}
        </label>
        <select name='activity' onChange={handleChange} value={settings.activity}>
          <option>Sedetary</option>
          <option>Light</option>
          <option>Moderate</option>
          <option>Heavy</option>
          <option>Very Heavy</option>
        </select>
      </div>

      <IndexCalculator settings={settings} />

      <h3>Update</h3>
      <div>
        <button onClick={handleForm}>Save</button>
      </div>
    </form>
  )
  
}

export default UserDataForm