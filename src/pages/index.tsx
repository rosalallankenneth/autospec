import { FC } from 'react';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
// import Login from '@/components/Login';
import Dashboard from './dashboard';
import scss from '../styles/Home.module.scss';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Autospec</title>
        <meta name="description" content="Vehicle Inspection Report System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={scss.main}>
        <Sidebar />
        <Dashboard />
        {/* <Login /> */}
      </main>
    </>
  )
}

export default Home;