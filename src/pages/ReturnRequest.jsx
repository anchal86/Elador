import React from 'react'

export default function ReturnRequest() {
  return (
    <div className='mt-40'>
        <div className='md:flex md:justify-around m-10  '>
            <div className='  p-2 px-6 py-6 space-y-6 ps:mt-10 md:m-2 font-serif hover:shadow-lg h-full lg:w-[40%] ps:w-full '>
                <h1 className='font-semibold font-serif text-2xl text-[#344e41] mt-4'>LOGIN</h1>
            <div>
                <input placeholder='Your Email' type='email' className='border-gray-100 w-full border-2 h-12 my-2 pl-2'/>
                <input placeholder='Your Password' type='password' className='border-gray-100 w-full border-2 h-12 my-2 pl-2' autoComplete='off'/>
            </div>

             <p>Forgot Your Password ?</p>
            
            <div>
              <button className=' bg-[#344e41] lg:w-[30%] ps:w-[50%] font-semibold font-serif text-white rounded py-2' >SIGN-IN</button>
            </div>
                 
            </div>


            <div className='  p-2 px-6 py-6 space-y-6 ps:mt-10 md:m-2 font-serif hover:shadow-lg lg:w-[40%] ps:w-full '>
                <h1 className='font-semibold font-serif text-2xl text-[#344e41] mt-4'>REGISTER</h1>
            <div>
                <input placeholder='First Name' type='text' className='border-gray-100 w-full border-2  h-12 my-2 pl-3'/>
                <input placeholder='Last Name' type='text' className='border-gray-100 w-full border-2 h-12 my-2 pl-3'/>  
                <input placeholder=' Email' type='email' className='border-gray-100 w-full border-2 h-12 my-2 pl-2'/>
                <input  placeholder=' Password'  type='password'  className='border-gray-100 w-full border-2 h-12 my-2 pl-2' />
                <input  placeholder=' Confirm Password'  type='password'  className='border-gray-100 w-full border-2 h-12 my-2 pl-2' />
            </div>
              

            <div>
              <button className=' bg-[#344e41] lg:w-[50%] ps:w-[70%] font-semibold font-serif text-white rounded py-3' >CREATE AN ACCOUNT</button>
            </div>
                 
            </div>

        </div>
        
    </div>
  )
}