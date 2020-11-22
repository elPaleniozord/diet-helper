import { useRecoilState } from "recoil"

const Input = ({name, type='text', stateAtom, placeholder}) => {
  const [state, setState] = useRecoilState(stateAtom)
  const handleChange = (e) => {
    const {name, value, type} = e.target

    setState(state => {
      return {...state, [name]: type==='number' ? parseInt(value) : value}
    })
  }
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input 
        name={name}
        value={state[name]}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input