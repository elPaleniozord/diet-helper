import React from 'react';
import { NextPage } from 'next';
import { getSession, signIn, signOut, useSession } from 'next-auth/client'
import { Router, useRouter } from 'next/router'
import Layout from '../components/organisms/Layout';
import ProgressGraph from '../components/ProgressGraph'
import Link from 'next/link';

const IndexPage = ({session}) => {  
  return (
    <Layout>
      <h1>Dashboard</h1>
      <p>Welcome, {}</p>
      <ProgressGraph />
      <Link href='/journal'>Check your journal</Link>

      <h2>How to use dietHelper</h2>
      <h3>Set your goals</h3>
      <p>Fill basic info about yourself, set your goal and we will take care of the rest. It's that easy.</p>

      <h3>Make plan</h3>
      <p>Generate weekly mean plan, </p>

      <h3>Track your progress</h3>

      <h3>Will this diet work?</h3>
      <p>I have no idea, did not tried it yet :D</p>
    </Layout>
  )
};

export default IndexPage;