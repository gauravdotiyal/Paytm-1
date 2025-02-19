import React, { useEffect, useState } from 'react'
import Balance from '../components/Balance'
import Users from '../components/Users'
import { Appbar } from '../components/Appbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    
   const [money,setMoney]=useState(0);
   const navigate=useNavigate();

  
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
    </div>
  )
}

export default Dashboard
