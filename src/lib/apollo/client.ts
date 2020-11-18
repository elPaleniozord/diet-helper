import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.NEXTAUTH_URL+'/graphql',
  cache: new InMemoryCache()
})