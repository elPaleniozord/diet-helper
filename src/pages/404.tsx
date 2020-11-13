import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <h2>404 - Page Not Found</h2>
      <Link href='/'>Take me back</Link>
    </Layout>
  )
};

export default NotFoundPage;