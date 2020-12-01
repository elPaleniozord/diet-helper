import { useRecoilState } from "recoil"
import { newRecipeState } from "../../lib/recoil/recoilRecipes"

const Tags = () => {
  const [state, setState] = useRecoilState(newRecipeState)

  const addTag = (tag: string): void => {
    if(state.input === '') return
    const newState = {
      ...state,
      tags: [...state.tags, tag],
      input: ''
    }
    setState(newState)
  }

  const removeTag = (e?, tag?) => {
    const id = tag ? tag : e.target.id
    console.log(id)
    const newTags = [...state.tags.filter((tag)=> tag !== id ? tag : null)]
    setState({
      ...state,
      tags: newTags
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    addTag(state.input)
  }
  const handleInputChange = (e) => {
    setState({...state, input: e.target.value})
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 8) {
      console.log('backspace')
      const tag = state.tags[state.tags.length-1]
      removeTag(null,tag)
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
              {/* type=button prevents click event being triggered from inputs 'enter' key down */}
              <button type='button' id={tag} onClick={removeTag}>X</button> 
            </li>
          )
        })}
      </ul>
      <input name='tag' value={state.input} placeholder='i.e. vegan, keto etc.' onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Tags