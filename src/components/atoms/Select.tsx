import { useRecoilState } from "recoil"

const SelectInput = ({identifier, values, stateAtom, multi=false}) => {
  const [state, setState] = useRecoilState(stateAtom)
  const options = values.map((option, i) => {
    return (
      <option key={i}>{option}</option>
    )
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setState(state => {
      return {...state, [name]: value}
    })
  }
  return (
    <>
      <label htmlFor={identifier}></label>
      <select name={identifier} onChange={handleChange} value={state[identifier]} multiple={!!multi}>
        {options}
      </select>
    </>
    
  )
}

export default SelectInput