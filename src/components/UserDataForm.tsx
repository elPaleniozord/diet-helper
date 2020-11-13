import {useRecoilValue, useSetRecoilState, useResetRecoilState} from 'recoil'
import {setSettings, settingsState} from '../lib/recoil/recoilSettings'
import Goal from './Goal'
import IndexCalculator from './IndexCalculator'


const useSettings = () => ({
  settings: useRecoilValue(settingsState),
  update: useSetRecoilState(setSettings),
  reset: useResetRecoilState(settingsState)
})

const UserDataForm = () => {
  const {settings, update, reset} = useSettings()
  const handleForm = (e) => {
    e.preventDefault()
    console.log('Updating your settings')
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(name,value)
    update({name,value})
  }
  return (
    <form>
      <h3>Basic Information</h3>
      <div>
        <label>Gender</label>
        <select name="gender" id='gender' onChange={handleChange} value={settings.gender}>
          <option>Female</option>
          <option>Male</option>
        </select>

        <label>Age</label>
        <input />

        <label>Height</label>
        <input />

        <label>Weight</label>
        <input />
      </div>

      <h3>Goals</h3>
      <div>
        <Goal />

        <label>Activity Level
          {/* <Tooltip text="Try your best to estimate your daily level of activity." /> */}
        </label>
        <select>
          <option>Sedetary</option>
          <option>Light</option>
          <option>Moderate</option>
          <option>Heavy</option>
          <option>Very Heavy</option>
        </select>
      </div>

      <IndexCalculator />

      <h3>Update</h3>
      <div>
        <button onClick={handleForm}>Save</button>
        <button>Reset</button>
      </div>
    </form>
  )
  
}

export default UserDataForm