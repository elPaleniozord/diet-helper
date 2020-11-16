import { useEffect } from 'react'
import { adjustMacros, calculateBMR, calculateTDEE } from '../utils/formulas'
import SliderInput from './SliderInput'

const IndexCalculator = ({settings}) => {
  useEffect(()=>{
    if(settings.goal === 'custom') {
      return
    }
    let update = {...settings, bmr: calculateBMR(settings)}
    update.tdee = calculateTDEE(update)
    const {prot, fats, carb, kcal} = adjustMacros(update)
    console.log(update, prot, fats,carb,kcal)
  }, [])

  return (
    <div>
      <h3>BMR {settings.bmr}</h3>
      <h3>TDEE {settings.tdee}</h3>
      <h3>Total Calories {settings.kcal}</h3>

      <div>
        <SliderInput  />
        <SliderInput />
        <SliderInput />
      </div>

      <p>Caloric deficit/surplus: X%</p>
      <p>Expected weight shift: +/- Y kg/week</p>
    </div>
  )
}

export default IndexCalculator