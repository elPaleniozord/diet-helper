import { useEffect } from 'react'
import {useRecoilState} from 'recoil'
import {settingsState} from '../../lib/recoil/recoilSettings'
import { adjustMacros, calculateBMR, calculateTDEE } from '../../utils/formulas'
import SliderInput from '../atoms/SliderInput'

const IndexCalculator = ({settings}) => {
  const [state, setSettings] = useRecoilState(settingsState)
  const difference = settings.kcal - settings.tdee
  useEffect(()=>{
    if(settings.goal === 'custom') {
      return
    }
    let update = {...settings}
    update.bmr = calculateBMR(settings)
    update.tdee = calculateTDEE(update)
    const {prot, fats, carb, kcal} = adjustMacros(update)
    setSettings(settings => {
      return {
        ...settings,
        bmr: update.bmr,
        tdee: update.tdee,
        carb: carb,
        fats: fats,
        kcal: kcal,
        prot: prot,
      }
    })
  }, [JSON.stringify(settings)])
  console.log(settings)
  return (
    <div>
      <h3>BMR {settings.bmr}</h3>
      <h3>TDEE {settings.tdee}</h3>
      <h3>Total Calories {settings.kcal}</h3>

      <div>
        <SliderInput nutrient='Protein' idx='prot' />
        <SliderInput nutrient='Fats' idx='fats' />
        <SliderInput nutrient='Carbohydrates' idx='carb' />
      </div>

      <p>Caloric {difference>0 ? 'surplus' : 'deficity'} {difference.toFixed(1)} kcal</p>
      <p>Expected weight shift: {(difference/1100).toFixed(1)} kg/week</p>
    </div>
  )
}

export default IndexCalculator