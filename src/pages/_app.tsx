import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client'

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log('page props: ', pageProps)
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
};

export default MyApp;

  
