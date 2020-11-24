import {atom, selector} from 'recoil'

const defaults = {
  tags: [],
  title: '',
  description: '',
  menu: [],
  imgUrl: '',
  ingredients: [],
  instructions: [],
} 

export const newRecipeState = atom({
  key: 'newRecipe',
  default: defaults
})