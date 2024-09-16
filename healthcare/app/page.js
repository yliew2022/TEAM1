'use client'
import Head from 'next/head';
import RegistrationForm from '/home/user/Documents/TEAM1/healthcare/app/register/page.jsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Registration Form</title>
        <meta name="description" content="A simple registration form using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Registration Form</h1>
        <RegistrationForm />
      </main>

      <footer>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
}

