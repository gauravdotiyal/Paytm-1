import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const PaymentStatus = () => {
    const [searchParams]=useSearchParams();
    const message=searchParams.get("message");
    const navigate=useNavigate();

    useEffect(()=>{
        const userToken=localStorage.getItem("token");

        if(!userToken){ 
            navigate("/signin")
        }else{
            const t=setTimeout(() => {
                navigate("/dashboard")
            }, 2000);
            return ()=>clearTimeout(t);
        }
    })
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
         <div className='bg-green-300 md:w-1/4 text-center py-10 px-5 m-4 text-green'>
             {message}
             <div className='text-center text-black text-sm font-semibold py-4'>
                Redirecting to Dashboard in 2 seconds.
             </div>
         </div>
    </div>
  )
}

export default PaymentStatus
