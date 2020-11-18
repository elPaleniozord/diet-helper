//import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { getSession, Provider } from 'next-auth/client'
import { RecoilRoot } from 'recoil'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
  cache: new InMemoryCache()
});

const MyApp = (props: AppProps) => {
  const {Component, ...pageProps} = props
  return (
    <ApolloProvider client={client} >
      <Provider session={pageProps.session}>
        <RecoilRoot>
          <Component {...pageProps} />   
        </RecoilRoot>         
      </Provider>
    </ApolloProvider>
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

  
