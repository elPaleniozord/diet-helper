import {atom, selector} from 'recoil'

const newRecipe = {
  tags: [],
  input: '',
  header: '',
  title: '',
  description: '',
  menu: [],
  imgUrl: '',
  ingredients: [],
  instructions: {
    'default': [
      'Put all ingredients in one pot', 
      'Boil it until everything is uniform gray color and homogenous', 
      'Serve hot or cold'
    ]
  },
  headers: {
    current: 'default',
    new: ''
  }
} 

export const newRecipeState = atom({
  key: 'newRecipe',
  default: newRecipe
})