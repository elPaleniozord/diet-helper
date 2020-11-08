import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { signOut } from 'next-auth/client'

const Navigator = () => {
  const router = useRouter()

  function isActive(route) {
    console.log(route)
    if(route === router.pathname){
      return 'active'
    }
    else ''
  }

  return (
    <nav>
      <ul>
        <li className={isActive('/')}>
          <Link href="/">Dashboard</Link>
        </li>
        
        <li className={isActive('/settings')}> 
          <Link href="plan">Planner</Link>
        </li>

        <li className={isActive('/settings')}>
          <Link href="/recipes">Recipes</Link>
        </li>

        <li className={isActive('/settings')}>
          <Link href="/settings">Settings</Link>
        </li>

        <li>
          <button onClick={()=>signOut()}>Sign Out</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigator