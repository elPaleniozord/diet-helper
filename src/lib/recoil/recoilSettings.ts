import { atom, selector} from 'recoil'

const defaults = {
  age: 25,
  gender: 'Female',
  weight: 75,
  height: 180,
  goal: 'Weight Loss',
  activity: 'Sedetary',
  bmr: 1500,
  tdee: 2200,
  kcal: 2200,
  prot: 120,
  fats: 60,
  carb: 60
}

export const settingsState = atom({
  key: 'settings',
  default: defaults
})
