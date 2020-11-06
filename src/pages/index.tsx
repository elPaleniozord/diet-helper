import React from 'react';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client'

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();
  console.log(session)
  if(loading) {
    return <div>Loading ...</div>
  }
  if(session) {
    return (
      <main>
        Hello, {session.user.email ?? session.user.name}
        <button onClick={()=>signOut()}>Sign Out</button>
      </main>
    )
  } else {
    return (
      <main>
        <h1>Next.js Boilerplate</h1>
        <div>
          <h2>Database:</h2>
          <p>PostgreSQL version xxx</p>
        </div>
        <button onClick={()=> signIn()}>Sign In</button>
      </main>
    );
  }
  
};

export default IndexPage;