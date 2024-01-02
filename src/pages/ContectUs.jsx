import React from 'react'

export default function ContactUs() {
  return (
    <div className='mt-40 '>
        <div className='md:flex md:justify-around m-10'>
          <div className='w-[40%] md:mt-12 es:mt-16 space-y-4'>
            <h1 className='text-3xl text-[#344e41] font-semibold font-serif'>Contact Us</h1>
            <h2 className='text-[#344e41] text-xl'>Ecommerce Office</h2> 
            <p className='font-semibold text-[#344e41]'>Elador Shoes Limited </p>
            <p className='text-[#344e41]'>Ground Floor, Building No. 8 <br />
              Tower - A, DLF Cyber City, Phase - II <br />
              Gurgaon - 122002, Haryana
            </p>
            <p className='text-[#344e41]'>
              <span className=' font-semibold'>Customer Care Timings:</span> Monday to Friday (10:00AM - 1:30PM & 2:30PM to 5:00PM)<br /> <br />
                <span className='font-semibold'>Customer Care Helpline:</span><br /><br />
                <span className='font-semibold'> Phone: </span>+91-93541-11126<br /><br />
                <span className='font-semibold'>Email: </span>lsocare@libertyshoes.com<br /><br />
                <span className='font-semibold'>For Business Related Queries,</span><br /><br />
                <span className='font-semibold'>Business Enquiry:</span> customercare@eladorshoes.com
            </p>
          </div>

          <div className='  p-2 px-6 py-6 space-y-6 es:mt-10 md:m-6 font-serif border-2 border-gray-100 hover:shadow-lg  '>
            <h1 className='font-semibold font-serif text-2xl text-[#344e41] mt-4'>Hit Us Up</h1>
            <div className='flex w-full space-x-6'>
              <div>
                <input placeholder='Your Name' type='text' className='border-gray-100 border-2 h-10 my-2'/>
              </div>
              <div>
                <input placeholder='Last Name' type='text' className='border-gray-100 border-2 h-10 my-2'/>
              </div>
            </div>

            <div className='flex w-full space-x-6'>
              <div>
                <input placeholder='Your Email' type='email' className='border-gray-100 w-full border-2 h-10 my-2'/>
              </div>
              <div>
                <input type='tel' placeholder='Phone number' className='border-gray-100 w-full border-2 h-10 my-2' />
              </div>
            </div>

                <textarea  rows='4' cols='30' placeholder="What's on your mind?" 
                className='border-gray-100 w-full border-2  my-2' ></textarea>

                <p>Please type the letters and numbers below <span className='text-red-700'>*</span></p>
                <input type='text' className='border-gray-100 w-full border-2 h-10 my-2' />

            <div className=' flex w-full h-10 my-2 '>
              <div className='w-[50%]'>IMAGE</div>
                <button className=' bg-[#344e41] w-[50%] font-serif text-white font-semibold rounded' >RELOAD CAPTCHA</button> 
            </div>
            <div className='text-center'>
              <button className=' bg-[#344e41] w-full font-semibold font-serif text-white rounded p-1' >SUBMIT</button>
            </div>
                 
            </div>
                      
        </div>
    </div>
  )
}
