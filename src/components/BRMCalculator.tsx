import { useEffect, useState } from "react"
import {bmr} from '../utils/formulas'

const TDEECalculator = () => {  
  const [inputValues, setInputValues] = useState({
    gender: 'FEMALE',
    age: 0,
    height: 0,
    weight: 0
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputValues({...inputValues, [name]: value})  
  }

  let BMRValue = Object.values(inputValues).every(item => !!item === true) ? bmr(inputValues) : 'Unknown'

  return (
    <div>
      <label>Gender</label>
      <select id='gender' name='gender' onChange={handleChange} value={inputValues.gender}>
        <option value='FEMALE'>Female</option>
        <option value='MALE'>Male</option>
        
      </select>

      <label>Age</label>
      <input id='age' name='age' onChange={handleChange} type='number'  value={inputValues.age}/>

      <label>Height</label>
      <input id='height' name='height' onChange={handleChange} type='number' value={inputValues.height} placeholder='in centimeters' />

      <label>Weight</label>
      <input id='weight' name='weight' onChange={handleChange} type='number' value={inputValues.weight} placeholder='in kilograms' />

      <h3>Basal Metabolic Rate: {BMRValue}</h3>
    </div>
  )
}

export default TDEECalculator