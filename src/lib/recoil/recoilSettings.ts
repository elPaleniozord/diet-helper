import { atom, selector} from 'recoil'

const defaults = {
  age: 25,
  gender: 'Female',
  weight: 75,
  height: 180,
  goal: 'Weight Loss',
  activity: 'Sedetary',
  bmr: 1500,
  targets: {
    kcal: undefined,
    prot: undefined,
    fats: undefined,
    carb: undefined
  }

}

export const settingsState = atom({
  key: 'settings',
  default: defaults
})

export const setSettings = selector({
  key: 'setSettings',
  set: ({set}) => set(settingsState, (settings) => {
    console.log(settingsState,settings)
    return settings
  })
})