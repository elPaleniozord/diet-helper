import { useSession, getSession } from "next-auth/client"
import AccessDenied from './molecules/AccessDenied'
import Layout from './organisms/Layout'

const Authenticator = ({children, session}) => {
  if (!session && typeof window !== 'undefined') {
    console.log('session,', session)
    window.location = 'api/auth/signin'
    return null
  }
  return (
    <Layout>
      {children}
    </Layout>
  )
}

Authenticator.getInitialProps = async ({req, res}) => {
  console.log('RES REQ GIP', res ,req)
  const session = await getSession({req})
  console.log('SESSION', session)
  if (!session && req) {
    res.writeHead(302, { Location: '/api/auth/signin' }).end()
    return {}
  }

  return { session }
}

export default Authenticator