import Navigator from './Navigator'
import Head from 'next/head'
import Footer from '../atoms/Footer'

const layout= ({children}) => {
  return (
    <main>
      <Head>
        <title>dietHelper</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigator />
      {children}
      <Footer />
    </main>
  )
}

export default layout