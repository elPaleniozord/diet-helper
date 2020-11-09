//Mifflin-St Jeor formula
export const bmr = (sex:string, age:number, weight:number, height:number): number => {
  return (10*weight) + (6.25*height) - (5*age) + (sex === 'MALE'? 5 : -161)
}
//total daily energy expenditure
type Activity = 'sedetary' | 'light' | 'moderate' | 'heavy' | 'super'
export const tdee = (bmr: number, activity: Activity) : number => {
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
