import {useRecoilValue, useSetRecoilState, useResetRecoilState} from 'recoil'
import {setSettings, settingsState} from '../lib/recoil/recoilSettings'
import Goal from './Goal'
import IndexCalculator from './IndexCalculator'


const useSettings = () => ({
  settings: useRecoilValue(settingsState),
})

const UserDataForm = () => {
  const setSetting = useSetRecoilState(settingsState)
  const {settings} = useSettings()
  
  const handleForm = (e) => {
    e.preventDefault()
    console.log('Updating your settings')
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setSetting(settings => {
      return {...settings, [name]: value}
    })

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
        <input name='age' type='number' onChange={handleChange} value={settings.age} />

        <label>Height</label>
        <input name='height' type='number' onChange={handleChange} value={settings.height} />

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