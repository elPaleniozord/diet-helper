import Navigator from './Navigator'
import Head from 'next/head'

const layout= ({children}) => {
  return (
    <main>
      <Head>
        <title>dietHelper</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigator />
      {children}
      <footer>
        designed and coded by jwalasik
      </footer>
    </main>
  )
}

export default layout