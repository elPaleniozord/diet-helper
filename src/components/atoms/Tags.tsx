import { createRef, useEffect, useState } from "react"

const Tags = ({stateAtom}) => {
  const [state, setState] = useState({
    tags: [],
    input: '',
  })
  console.log(state)
  const addTag = (tag) => {
    const newTags = [...state.tags, tag]
    setState({
      tags: newTags,
      input: ''
    })
  }
  const removeTag = (id) => {
    console.log('remove')
    const newTags = [...state.tags].filter((tag)=> tag !== id ? tag : null)
    setState({...state, tags: newTags})
  }

  const handleClick = (e) => {
    e.preventDefault()
    addTag(state.input)
  }
  const handleInputChange = (e) => {
    setState({...state, input: e.target.value})
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13 && e.target.value !== '') {
      console.log('enter')
      addTag(state.input)
    }
    if(e.keyCode === 8 && state.tags !== [] && state.input === '') {
      console.log('backspace')
      removeTag(state.tags[state.tags.length - 1])
    }
  }
  
  return (
    <div>
      <label htmlFor='tag'>Tags</label>
      <ul>
        {state.tags.map((tag, idx)=>{
          return (
            <li key={tag+idx}>
              {tag}
              <button id={tag} onClick={()=>removeTag(tag)}>x</button>
            </li>
          )
        })}
      </ul>
      <input name='tag' value={state.input} placeholder='i.e. vegan, keto etc.' onChange={handleInputChange} onKeyDown={handleKeyDown}/>
      <button onClick={handleClick}>Add</button>

    </div>
  )
}

export default Tags