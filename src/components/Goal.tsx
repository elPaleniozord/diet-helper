import {useRecoilState} from 'recoil'
import {settingsState} from '../lib/recoil/recoilSettings'

const Goal = () => {
  const [settings, setSettings] = useRecoilState(settingsState)

  const handleChange = (e) => {
    const {name, value} = e.target
    setSettings(settings => {
      return {...settings, [name]: value}
    })
  }

  return ( 
    <>
      <label>Goal</label>
      <select 
        name='goal'
        value={settings.goal}
        onChange={handleChange}
      >
        <option value='Weight Loss'>Weight Loss</option>
        <option value='Maintenance'>Maintenance</option>
        <option value='Bulking Up'>Bulking Up</option>
        <option value='Custom'>Custom</option>
      </select>
    </>
  )
}

export default Goal