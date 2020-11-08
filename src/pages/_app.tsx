import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { getSession, Provider, useSession } from 'next-auth/client'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
};

export default MyApp;

  
