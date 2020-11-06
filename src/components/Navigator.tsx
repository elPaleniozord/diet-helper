import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

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
        <li className={isActive('/dashboard')}>
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li className={isActive('/settings')}>
        <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigator