import Navigator from './Navigator'
import Head from 'next/head'

const layout= ({children}) => {
  return (
    <>
      <Head>

      </Head>
      <Navigator />
      {children}
    </>
  )
}

export default layout