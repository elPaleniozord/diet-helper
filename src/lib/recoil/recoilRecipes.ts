import {atom, selector} from 'recoil'

export const newRecipeState = atom({
  key: 'newRecipe',
  default: {}
})