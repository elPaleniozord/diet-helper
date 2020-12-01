import { gql } from "@apollo/client"
import Router from "next/router"
import { useRecoilState } from "recoil"
import ImageUpload from "../../components/atoms/ImageUpload"
import Input from "../../components/atoms/Input"
import SelectInput from "../../components/atoms/Select"
import Tags from "../../components/atoms/Tags"
import Ingredients from "../../components/molecules/Ingredients"
import MarkdownPreview from "../../components/molecules/MarkdownPreview"
import Form from "../../components/organisms/Form"
import Layout from "../../components/organisms/Layout"
import { newRecipeState } from '../../lib/recoil/recoilRecipes'

const ADD_RECIPE = gql`
  mutation addRecipe($input: RecipeInput!) {
    addRecipe(input: $input) {
      type
      text
    }
  }
`

const AddRecipe = (): JSX.Element => {
  const [newRecipe, setNewRecipe] = useRecoilState(newRecipeState)
  return (
    <Layout>
      <h1>Create New Recipe</h1>
      <Form query={ADD_RECIPE} stateAtom={newRecipeState}>
        <div>
          <h2>Basic</h2>
          <Input name='title' stateAtom={newRecipeState} placeholder='Title'/>
          <Input name='description' stateAtom={newRecipeState} placeholder='Description' type='textarea' />

          <SelectInput 
            identifier='menu' 
            values={['Breakfast','Lunch', 'Dinner', 'Supper', 'Snack', 'Suplement']}
            stateAtom={newRecipeState}
          />

          <Tags />
        </div>

        <div>
          <h2>Picture</h2>
          <ImageUpload />
        </div>

        <Ingredients />

        <h2>Instructions</h2>
        <MarkdownPreview>
          <input placeholder='Add Ingredient' />
          <input placeholder='Add Header' />
        </MarkdownPreview>

        <div>
          <h2>Other</h2>
          <input placeholder='Preparation Time' />
          <input placeholder='Cooking Time' />
        </div>
        <button>Save</button>

      <button onClick={()=> Router.back()}>Cancel</button></Form>
        
    </Layout>
  )
}

export default AddRecipe