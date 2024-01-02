import React from 'react'

export default function TrackYourOrder() {
  return (
    <div className='mt-40'>
      <div className='font-serif es:mr-10 m-14 text-[#403d39] space-y-6'>
        <h1 className=' text-2xl underline decoration-2 underline-offset-8 '>ORDER TRACKING</h1>
      </div>
      <p className='text-center font-serif text-[#403d39] text-lg'>TRACK YOUR ORDER</p>

      <div className='text-center space-x-4 my-3 w-full p-4 '>
        <input placeholder='ENTER AWB NUMBER' type='text' className='border-black  rounded border-2 h-10 px-4'/>
        <button className=' bg-[#344e41] font-semibold font-serif border-black border-2 text-white rounded h-9 px-3 mt-2'>SUBMIT</button>
      </div>
    </div>
  )
}