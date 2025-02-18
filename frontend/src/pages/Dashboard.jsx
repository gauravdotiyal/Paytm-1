import React from 'react'
import Balance from '../components/Balance'
import Users from '../components/Users'
import { Appbar } from '../components/Appbar'

const Dashboard = () => {
  return (
    <div>
        <Appbar/>
        <div className='m-7'>
          <Balance value={"10,000"}/>
          <Users/>
        </div>
    </div>
  )
}

export default Dashboard
