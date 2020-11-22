import { useRecoilState } from "recoil"
import { settingsState } from "../../lib/recoil/recoilSettings"
import { customMacros } from "../../utils/formulas"

const SliderInput = ({nutrient, idx}) => {
  const [settings, setSettings] = useRecoilState(settingsState)
  let grams = settings[idx],
      kcals = grams * (idx==='fats'? 9 : 4),
      perc = (kcals*100/settings.kcal),
      max = settings.weight*5
  
  const handleChange = (e) => {
    const {name, value} = e.target
    const update = customMacros({...settings, [name]: value})
    setSettings(settings => {
      return {...update, kcal: update.kcal, [name]: parseInt(value)}
    })
  }

  return (
    <>
      <label>{nutrient}</label>
      <span>{perc.toFixed(0)} %</span>
      <input 
        name={idx}
        value={settings[idx]}
        onChange={handleChange}
        type='range'
        min={1} max={max}
        disabled={settings.goal !== 'Custom'} 
      />
      <span>{grams} g</span>
      <span>{kcals.toFixed(0)} kcal</span>
    </>    
  )
}

export default SliderInput