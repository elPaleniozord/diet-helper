import { useMutation } from "@apollo/client"
import { Children } from "react"
import { useRecoilState } from "recoil"

const Form = ({query, stateAtom, children}): JSX.Element => {
  const [state, setState] = useRecoilState(stateAtom)

  const [submitForm, {loading, error}] = useMutation(query, {
    onCompleted: (res)=>{
      console.log(res)
    },
    onError: (err)=>{
      console.log(err)
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    submitForm({variables: {input: state}})
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default Form