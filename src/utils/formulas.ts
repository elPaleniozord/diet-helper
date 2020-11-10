//Mifflin-St Jeor formula
interface BMR {age:number, height: number, gender: string, weight: number}
export const bmr = ({age, height, gender, weight}: BMR): number => {
  return (10*weight) + (6.25*height) - (5*age) + (gender === 'MALE'? 5 : -161)
}
//total daily energy expenditure
interface TDEE {
  bmr: number
  activity: 'sedetary' | 'light' | 'moderate' | 'heavy' | 'super'
}
export const tdee = ({bmr, activity} : TDEE) : number => {
  const lvl = {
    sedetary: 1.2,
    light: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    super: 1.9
  }
  return bmr*lvl[activity]
} 

export const bulking = (value) => {
  return value * 1.2
}

export const cutting = (value) => {
  return value * 0.8
}
