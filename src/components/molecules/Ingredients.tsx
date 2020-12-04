import { useState } from "react"
import { useRecoilState } from "recoil"
import { newRecipeState } from "../../lib/recoil/recoilRecipes"
import Input from "../atoms/Input"
import SelectInput from "../atoms/Select"

const defaultInputs = {
  ingredient: '',
  quantity: '',
  unit: ''
}

const Ingredients = () => {
  const [state, setState] = useRecoilState(newRecipeState)
  const [inputs, setInputs] = useState(defaultInputs)

  const handleAdd = () => {
    console.log('new ingredient:', state)
    const newIngredient = {
      name: inputs.ingredient,
      quantity: parseInt(inputs.quantity),
      unit: inputs.unit
    }
    const update = [...state.ingredients, newIngredient]
    setState({...state, ingredients: update})
    setInputs(defaultInputs)
  }

  const handleRemove = (e) => {
    const [name, idx] = e.target.name.split('|')
    const update = [...state.ingredients]
    update.splice(idx, 1)
    setState({...state, ingredients: update})
  }

  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {state.ingredients.map((ingredient, i) => 
          (<li>
            <span>{ingredient.name}</span>
            <span>{ingredient.quantity}</span>
            <span>{ingredient.unit}</span>
            <button type='button' name={ingredient.name+'|'+i} onClick={handleRemove}>X</button>
          </li>   )       
        )}
      </ul>
      
      {/* <Input name='ingredient' placeholder='Name - i.e. Chicken Thighs' stateAtom={newRecipeState} /> */}
      <input placeholder='ingredient' value={inputs.ingredient} onChange={e=>setInputs({...inputs, ingredient: e.target.value})}/>

      <input placeholder='amount' value={inputs.quantity} onChange={e=>setInputs({...inputs, quantity: e.target.value})}/>
      {/* <Input name='quantity' type='number' placeholder='Amount - i.e. 500' stateAtom={newRecipeState} /> */}
      
      <select value={inputs.unit} onChange={e=>setInputs({...inputs, unit: e.target.value})}>
        <option>grams</option>
        <option>milliliters</option>
        <option>none</option>
      </select>
      {/* <SelectInput identifier='unit' values={['gram', 'milliliter', 'none']} stateAtom={newRecipeState} /> */}

      <button type='button' onClick={handleAdd}>Add</button>
    </>
  )
}

export default Ingredients