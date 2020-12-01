import { useEffect } from "react"

const Preview = ({markdown}) => {
  let preview
  const placeholder = `
    #Microwave Instructions
    Place all the ingredients into a medium microwave safe bowl and stir together. Heat in the microwave on high for 2 minutes. Then add 15-second increments until the oatmeal is puffed and softened. This is only necessary the first time you make it. Then you can gauge the exact time needed and repeat in the future. Stir before serving
    #Stovetop Instructions
    In a small saucepan, bring the water and milk to a boil. Reduce the heat to low and pour in the oats. Cook, stirring occasionally, until the oats are soft and have absorbed most of the liquid, about 5 minutes.  Remove from the heat, cover and let stand for 2-3 minutes.
    #Assembly
    Stir in the toppings and let rest for a few minutes to cool. Thin with a little more milk, if desired. Serve warm.
  `
  useEffect(()=>{

  },[])

  return (
    <div>
      THIS IS PREVIEW
      {preview}
    </div>
  )
}

export default Preview