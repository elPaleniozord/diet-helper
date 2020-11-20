import { signIn } from 'next-auth/client'

const AccessDenied = () => {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>You are not authorized to view this content</p>
      <button onClick={()=> signIn()}>Sign In</button>
    </div>
  )
}

export default AccessDenied