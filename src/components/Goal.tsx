import { useState } from "react"

const Goal = () => {
  const [goal, setGoal] = useState('WeightLoss')

  return ( 
    <>
      <label>Goal</label>
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
        <div>
          <label>kcal</label>
          <input />
          <label>protein</label>
          <input />
          <label>fats</label>
          <input />
          <label>carbohydrates</label>
          <input />
        </div> 
        : 
        null}
    </>
  )
}

export default Goal