import { useRecoilState } from "recoil"

const Ingredients = () => {
  return (
    <>
        <label htmlFor='ingredient'>Ingredient</label>
        <input name='ingredient' />

        <label htmlFor='quantity'>Quantity</label>
        <input name='quantity' />

        <label htmlFor='unit'></label>
        <select name='unit'>
          <option>gram</option>
          <option>milliliter</option>
          <option>none</option>
        </select>

        <button>Add</button>
    </>
  )
}

export default Ingredients