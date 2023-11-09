import Head from 'next/head';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
// import Login from '@/components/Login';
import Dashboard from './dashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Autospec</title>
        <meta name="description" content="Vehicle Inspection Report System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Header />
        <Sidebar />
        <Dashboard />
        {/* <Login /> */}
      </main>
    </>
  )
}
