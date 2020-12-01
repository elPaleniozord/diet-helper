import { useState } from "react"
import Preview from "../atoms/Preview"

const MarkdownPreview = ({children}): JSX.Element => {
  const [state, updateState] = useState({
    currentHeader: '',
    markdown: {
      // header: [step1, step2,step3]
    }
  })

  const handleChange = (e) => {
    const {name, value} = e.target
  }

  const addHeader = (e) => {
    const {value} = e.target
    e.target.value = ''
    updateState({...state, currentHeader: value})
  }

  const addStep = (e) => {
    const {name, value} = e.target
    const update = {...state.markdown}
    update[name] = update[name] ? [...update[name], value] : [value]
    console.log(update)
  }

  return (
    <div>
      <Preview markdown={state.markdown} />
      
      {/* {children} */}

      <input 
        name='header'
        id='header'
        placeholder='Add header - i.e. Sauce'
        onChange={addHeader}
      />
      <button>Add New Header</button>

      <textarea 
        name='text'
        placeholder='Specify instruction step - i.e. Mix everything together'
      />

      <button type='button' onClick={addStep()}>Add Step</button>
    </div>
  )
}

export default MarkdownPreview