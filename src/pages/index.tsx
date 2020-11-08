import React from 'react';
import { NextPage } from 'next';
import { getSession, signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();
  const router = useRouter()
  if(loading) {
    return <div>Loading ...</div>
  }
  if(session) {
    return (
      <Layout>
      <h1>Dashboard</h1>
      <p>something somthing</p>
    </Layout>
    )
  } else {
    router.push('/api/auth/signin')
  }  
};

export default IndexPage;