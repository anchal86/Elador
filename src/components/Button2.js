import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#0c4a6e] md:w-auto text-white font-[poppins] text-[12px] py-1 px-6 rounded md:ml-8 shadow-lg duration-500'>
        {props.children}
    </button>
  )
}

export default Button
