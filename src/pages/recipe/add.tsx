import Router from "next/router"
import Layout from "../../components/organisms/Layout"

const AddRecipe = () => {
  return (
    <Layout>
      <h1>Create New Recipe</h1>
      <form>
        <div>
          <h2>Basic</h2>
          <input placeholder='Title' />
          <input placeholder='Description' type='textarea' />
          <select placeholder='Menu' multiple>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Supper</option>
            <option>Snack</option>
            <option>Suplement</option>
          </select>
          <input placeholder='Tags - ex. vegan, paleo, etc.' />
        </div>
        <div>
          <h2>Picture</h2>
          <input placeholder='Picture url' />
        </div>

        <div>
          <h2>Ingredients</h2>
          <input placeholder='Add Ingredient' />
          <input placeholder='Add Header' />
        </div>

        <div>
          <h2>Instructions</h2>
          <input placeholder='Add Ingredient' />
          <input placeholder='Add Header' />
        </div>

        <div>
          <h2>Other</h2>
          <input placeholder='Preparation Time' />
          <input placeholder='Cooking Time' />
        </div>
      </form>
      <button onClick={()=> Router.back()}>Cancel</button>
    </Layout>
  )
}

export default AddRecipe