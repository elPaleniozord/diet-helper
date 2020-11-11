import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { getSession, Provider, useSession } from 'next-auth/client'
import { Router } from 'next/router'

const MyApp = ({Component, ...pageProps}) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
};

MyApp.getInitialProps = async (ctx) => {
  const session = await getSession(ctx)
  if(!session) {
    const {res} = ctx.ctx
    res.writeHead(301, {
      Location: 'api/auth/signin'
    })
    res.end()
    return {}
  }
  return {session}
}

export default MyApp;

  
