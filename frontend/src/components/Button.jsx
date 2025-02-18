import React from 'react'

const Button = ({label,onClick }) => {
  return ( 
      <button
    //    onClick={onClick}
       type="button"
       className='w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-no p-2 rounded'
      >{label}</button> 
  )
}

export default Button
