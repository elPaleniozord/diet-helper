//import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { getSession, Provider } from 'next-auth/client'
import {RecoilRoot} from 'recoil'

const MyApp = (props: AppProps) => {
  const {Component, ...pageProps} = props
  return (
    <Provider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />   
      </RecoilRoot>         
    </Provider>
  )
};

MyApp.getInitialProps = async ({ctx}) => {
  const session = await getSession(ctx)
  if(!session) {
    ctx.res.writeHead(301, {Location: 'api/auth/signin'}).end()
    return {}
  }
  return {session}
}

export default MyApp;

  
