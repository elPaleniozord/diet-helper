import { useState } from "react"
import { useRecoilState } from "recoil"
import { newRecipeState } from "../../lib/recoil/recoilRecipes"
import List from '../atoms/List'

const initialState = {
  'default': [
    'Put all ingredients in one pot', 'Boil it until everything is gray and homogenous', 'Serve hot or cold'
  ]
}

const Instructions = () => {
  //const [{instructions, headers}, updateState] = useRecoilState(newRecipeState)
  
  const [list, setList] = useState(initialState)
  const [input, setInput] = useState('')
  const [header, setHeader] = useState('')

  const addHeader = () => {
    const update = {...list}
    if (!update[header]) {
      update[header] = []
    }
    setList(update)
    setHeader('')
  }

  const removeHeader = (e) => {
    const update = {...list}
    delete update[e.target.name] 
    setList(update)
  }

  const addStep = () => {
    const update = [...list[header], input]
    setList({...list, [header]: update})
    setInput('')
  }

  const removeStep = (e) => {
    const [header, idx] = e.target.name.split('|')
    const update = [...list[header]]
    update.splice(idx, 1)
    setList({...list, [header]:update})
  }

  return (
    <div>
      {Object.entries(list).map(([header, steps], i): JSX.Element=> 
        <List key={'instruction-list-'+i} header={header} steps={steps} removeHeader={removeHeader} removeStep={removeStep} />  
      )}
      <input 
        type='text'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <button type='button' onClick={addStep}>Add Step</button>
      
      <input 
        type='text'
        value={header}
        onChange={(e)=>setHeader(e.target.value)}
      />
      <button type='button' onClick={addHeader}>Add Header</button>
    </div>
  )
}

export default Instructions