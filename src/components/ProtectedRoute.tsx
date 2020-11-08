import { useSession, getSession } from "next-auth/client"
import AccessDenied from '../components/AccessDenied'
import Layout from '../components/Layout'

const ProtectedRoute = ({children}) => {
  const [ session, loading ] = useSession()
  if (typeof window !== 'undefined' && loading) return null
  if (!session) return <AccessDenied />
  return (
    <Layout>
      {children}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session }
  }
}

export default ProtectedRoute