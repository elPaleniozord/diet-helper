//Mifflin-St Jeor formula
interface BMR {age:number, height: number, gender: string, weight: number}
export const calculateBMR = ({age, height, gender, weight}: BMR): number => {

  return (10*weight) + (6.25*height) - (5*age) + (gender === 'Male'? 5 : -161)
}
//total daily energy expenditure
interface TDEE {
  bmr: number
  activity: 'Sedetary' | 'Light' | 'Moderate' | 'Heavy' | 'Very Heavy'
  goal: 'Weight Loss' | 'Maintenance' | 'Bulking Up' | 'Custom'
}
export const calculateTDEE = ({bmr, activity} : TDEE) : number => {
  const lvl = {
    Sedetary: 1.2,
    Light: 1.375,
    Moderate: 1.55,
    Heavy: 1.725,
    'Very Heavy': 1.9
  }
  return bmr*lvl[activity]
} 

export const adjustMacros = (data) => {
  const macros = (kF, pF, fF) => { //factors for calories, protein and fats based on goal
    const kcal = data.tdee * kF,
          prot = data.weight * pF,
          fats = fF * kcal/9,
          carb = (kcal - (prot*4) - (fats*9))/4

    return {
      carb: carb,
      fats: fats,
      kcal: kcal,
      prot: prot
    }
  }
  switch(data.goal) {
    case 'Weight Loss':
      return macros(0.9, 2.0, 0.3)
    case 'Maintenance':
      return macros(1.0, 1.8, 0.25)
    case 'Bulking Up':
      return macros(1.1, 1.6, 0.2)
    case 'Custom':
      return data
  }
}

export const customMacros = (data) => {
  const totalKcal = data.prot*4 + data.carb*4 + data.fats*9
  return {...data, kcal: totalKcal}
}