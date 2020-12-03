import {atom, selector} from 'recoil'

const defaults = {
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
  default: defaults
})