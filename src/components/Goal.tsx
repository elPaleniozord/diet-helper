import { useState } from "react"

const Goal = () => {
  const [goal, setGoal] = useState('WeightLoss')
  return ( 
    <div>
      <h2>Goal</h2>
      <p>Set your goal</p>
      <select 
        value={goal}
        onChange={(e)=>{
          setGoal(e.target.value)
        }}
      >
        <option value='Weight Loss'>Weight Loss</option>
        <option value='Maintenance'>Maintenance</option>
        <option value='Bulking Up'>Bulking Up</option>
        <option value='Custom'>Custom</option>
      </select>

      {goal==='Custom' ? 
        <input placeholder='Enter your daily calorie target' onChange={(e)=>{
          console.log(e.target.value)
        }} /> 
        : 
        null}
    </div>
  )
}

export default Goal