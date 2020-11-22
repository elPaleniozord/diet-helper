import { useEffect, useState } from "react"

const Tags = ({stateAtom}) => {

  return (
    <>
      <label>Tags</label>
      <ul>
        {stateAtom.map(tag=>{
          return (
            <li>{tag}</li>
          )
        })}
      </ul>
      <input placeholder='i.e. vegan, keto etc.' />
      <button>Add</button>

    </>
  )
}

export default Tags