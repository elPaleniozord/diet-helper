//Mifflin-St Jeor formula
interface BMR {age:number, height: number, gender: string, weight: number}
export const calculateBMR = ({age, height, gender, weight}: BMR): number => {
  return (10*weight) + (6.25*height) - (5*age) + (gender === 'MALE'? 5 : -161)
}
//total daily energy expenditure
interface TDEE {
  bmr: number
  activity: 'Sedetary' | 'Light' | 'Moderate' | 'Heavy' | 'Very Heavy'
  goal: 'Weight Loss' | 'Maintenance' | 'Bulking Up'
}
export const calculateTDEE = ({bmr, activity} : TDEE) : number => {
  const lvl = {
    Sedetary: 1.2,
    Light: 1.375,
    Moderate: 1.55,
    Heavy: 1.725,
    'Very Heavy': 1.9
  }
  console.log(lvl[activity])
  return bmr*lvl[activity]
} 

export const adjustMacros = ({tdee, goal, weight}) => {
  const macros = (kF, pF, fF) => { //factors for calories, protein and fats based on goal
    const kcal = tdee * kF,
          prot = weight * pF,
          fats = fF * kcal/9,
          carb = (kcal - (prot*4) - (fats*9))/4

    return {
      carb: carb.toFixed(2),
      fats: fats.toFixed(2),
      kcal: kcal.toFixed(2),
      prot: prot.toFixed(2)
    }
  }
  switch(goal) {
    case 'Weight Loss':
      return macros(0.9, 2.0, 0.3)
    case 'Maintenance':
      return macros(1.0, 1.8, 0.25)
    case 'Bulk Up':
      return macros(1.1, 1.6, 0.2)
  }
}
