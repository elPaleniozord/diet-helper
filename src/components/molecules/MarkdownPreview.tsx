import { useEffect } from "react"

const placeholder = {
  'Header 1': [
    'step1', 'step2', 'step3'
  ],
  'Header2': ['step1']
}

const MarkdownPreview = ({markdown, remove}): JSX.Element => {
  let preview  = Object.entries(placeholder).map(([key, arr])=> {
    return (
      <div>
        <h3>{key}<button type='button' name={key} onClick={remove}>X</button></h3>
        <ul>
          {arr.map((step, i)=> <li key={step+i}>{step}<button type='button' name={key+'|'+i} onClick={remove}>X</button></li>)}
        </ul>
      </div>
    )
  })
  useEffect(()=>{
    preview = Object.entries(placeholder).map(([key, arr])=> {
      return (
        <div>
          <h3>{key}</h3>
          <ul>
            {arr.map((step, i)=> <li key={step+i}>{step} <button>X</button></li>)}
          </ul>
        </div>
      )
    })
  }, [])
  return (
    <div>
      This is markdown preview
      {preview}
    </div>
  )
}

const Remove = ({remove}) => (<button onClick={remove}>X</button>)

export default MarkdownPreview