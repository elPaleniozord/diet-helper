import { Children } from "react"

const Tooltip = ({text}) => {
  return (
    <div>
      {Children}
      <span>{text}</span>
    </div>
  )
}

export default Tooltip