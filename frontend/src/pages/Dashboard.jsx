import React, { useEffect, useState } from 'react'
import Balance from '../components/Balance'
import Users from '../components/Users'
import { Appbar } from '../components/Appbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '../components/Button'

const Dashboard = () => {
    
   const [money,setMoney]=useState(0);
   const navigate=useNavigate();
   
   function onClickHandler(){
     localStorage.removeItem("token");
     navigate("/");
   }
   
   useEffect(() => {
    // Define the async function inside
    const fetchBalance = async () => {
      const userToken = localStorage.getItem("token");
      if (!userToken) {
        navigate("/signin");
        return;
      }
  
      try {
        const res = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + userToken
          }
        });
        setMoney(res.data.balance);
      } catch (error) {
        navigate("/signin");
      }
    };
  
    // Call the async function
    fetchBalance();
  }, [navigate]);

  return (
    <div> 
        <Appbar/>
        <div className='m-7'>
          <Balance value={money}/>
          <Users />
        </div>

        <div className='flex justify-center w-1/3 mx-auto pb-10'>
             <button onClick={onClickHandler} className='flex justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-8 px-4 py-2 w-full bg-green-500 text-white cursor-pointer' >Logout</button> 
        </div>
    </div>
  )
}

export default Dashboard
