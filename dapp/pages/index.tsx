import { create } from 'domain';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import useDwitter from '../hooks/useDwitter';

import { useState } from 'react';


const Home: NextPage = () => {
  const { connect, account, user, createUser, postDweet, dweets } = useDwitter();
  const [dweetContent, setDweetContent] = useState<string>('');
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dwitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 ">
        <h1 className=" mb-8 text-6xl font-bold ">
          Welcome to <span className="text-blue-500">Dwitter </span>
        </h1>

        {!account ? (
          <Button label="Connect with Ethereum" onClick={connect}/>
        ) : (
          account.toUpperCase() != user?.wallet.toUpperCase() ? (
          <SignUpForm createUser =  {createUser} />      
          //<Button label="Sign Up" onClick= {()=> createUser("SV", "Shashank", "Some bio", "https://blog.logomyway.com/wp-content/uploads/2021/11/Ethereum-logo.png")} />) :(
          ) : (
            <><div className="flex items-center w-80">
                  <img src={user?.avatar} className='rounded-full h-16 w-16 mr-4' />
                  <div className="flex flex-col justify-start">
                    <span>{user?.name}</span>
                    <span className='text-sm text-gray-500'>@{user?.username}</span>
                  </div>
                  <textarea className='rounded-xl ml-4 w-64' placeholder="What's happening?" value={dweetContent} onChange={e=>setDweetContent(e.target.value)} />
                </div><div className="mt-2 flex justify-end">
                    <Button label="Dweet" onClick {...() => postDweet(dweetContent)} />
                  </div></>
          )
          )}

        {
          dweets.map(dweet => (
            <span className='w-64 py-2 px-4 '>
              {dweet.content}
            </span>
          ))
        }
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by Ethereum
      </footer>
    </div>
  )
}

export default Home
