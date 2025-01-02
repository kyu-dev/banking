import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {

   const loggedIn = {firstName:'Arthur', lastName:'VIENOT', email:'arthurvienot1008@gmail.com'};


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access your account information and manage your account settings."
            />


          <TotalBalanceBox
           accounts={[]} 
           totalBanks={1}
           totalCurrentBalance={13827.98}
          />
        </header>
        RECENT TRANSACTION
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50} , { currentBalance: 123.50}]}
      />
    </section>
  )
}

export default Home
