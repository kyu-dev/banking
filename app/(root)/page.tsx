import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {

   const loggedIn = await getLoggedInUser();


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
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
