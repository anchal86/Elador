import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io'

export default function NewArrivals() {

  const [open, setOpen] = useState(true);
  const [openA, setOpenA] = useState(true);
  const [openB, setOpenB] = useState(true);
  const [openC, setOpenC] = useState(true);
  const [openD, setOpenD] = useState(true);
  const [openE, setOpenE] = useState(true);
  const [openF, setOpenF] = useState(true);

  return (
    <div className='sm:mt-32 ps:mt-40 lgpx-6 md:px-3 ps:pl-3 ps:pr-1'>
        <div className='m-6 font-serif text-[15px] flex'>
        <Link to={'/' } className='hover:underline text-gray-600' >Home</Link>
        <IoIosArrowForward className='mt-1'/>
        <Link to={'/NewArrivals' } className='hover:underline text-gray-600' >New Arrivals</Link>
        </div>
        <h1 className='text-4xl font-normal font-sans ml-8 my-6'>NEW ARRIVALS</h1>
        <div className='flex'>
          <div className='md:w-[20%] sm:w-[25%] border-r-2 '>
            <h1 className='font-serif my-4 '>FILTER </h1>
            <div className='my-6'>
              <div onClick={()=>(setOpen(!open))} className='flex justify-between font-serif mb-2 mr-4'>
                <h1>COLLECTION</h1>
                <ion-icon name={open ? 'menu':'close'} className='cursor-pointer'></ion-icon>
              </div>
              {console.log(open)}
              <ul className={`font-serif transition-all duration-100 ease-in ${open ? 'top-28 block':'top-[-490px] hidden'} `}>
                <li><input type='checkbox' className='mr-2'/>Formal</li>
                <li><input type='checkbox' className='mr-2'/>Casual</li>
                <li><input type='checkbox' className='mr-2'/>Bin</li>
                <li><input type='checkbox' className='mr-2'/>Comfort</li>
                <li><input type='checkbox' className='mr-2'/>Sporty Casual</li>
                <li><input type='checkbox' className='mr-2'/>School</li>
                <li><input type='checkbox' className='mr-2'/>Sports</li>
                <li><input type='checkbox' className='mr-2'/>Fashion</li>
              </ul>
            </div>
            
            <div className='bg-gray-400 h-[1px] my-6  '></div>
            <div className='my-6'>
              <div onClick={()=>(setOpenA(!openA))} className='flex justify-between font-serif mb-2 mr-4'>
                <h1>TYPE</h1>
                <ion-icon name={openA ? 'menu':'close'} className='cursor-pointer'></ion-icon>
              </div>
              <ul className={`font-serif transition-all duration-100 ease-in ${openA ? 'top-28 blocl':'top-[-490px] hidden'} `}>
                <li><input type='checkbox'className='mr-2 ' />Ballerina</li>
                <li><input type='checkbox' className='mr-2 ' />Lacing Shoes</li>
                <li><input type='checkbox' className='mr-2 ' />Non-Lacing Shoes</li>
                <li><input type='checkbox' className='mr-2 ' />Sandals</li>
                <li><input type='checkbox' className='mr-2 ' />SLippers</li>
                <li><input type='checkbox' className='mr-2 ' />Thongs</li>
                <li><input type='checkbox' className='mr-2 ' />Slip On</li>
                <li><input type='checkbox' className='mr-2 ' />Shoes</li>
              </ul>
            </div>
            <div className='bg-gray-400 h-[1px] my-6  '></div>
            <div className='my-6'>
              <div onClick={()=>(setOpenB(!openB))} className='flex justify-between font-serif mb-2 mr-4'>
                <h1>BRAND</h1>
                <ion-icon name={openB ? 'menu':'close'} className='cursor-pointer'></ion-icon>
              </div>
              <ul className={`font-serif transition-all duration-100 ease-in ${openB ? 'top-28 block':'top-[-490px] hidden'}`}>
                <li><input type='checkbox' className='mr-2'/>A-HA</li>
                <li><input type='checkbox' className='mr-2'/>Force 10</li>
                <li><input type='checkbox' className='mr-2'/>Gliders</li>
                <li><input type='checkbox' className='mr-2'/>Healers</li>
                <li><input type='checkbox' className='mr-2'/>Prefect</li>
                <li><input type='checkbox' className='mr-2'/>Senorita</li>
              </ul>
            </div>
            <div className='bg-gray-400 h-[1px] my-6  '></div>
            <div className='my-6'> 
              <div onClick={()=>(setOpenC(!openC))} className='flex justify-between font-serif mb-2 mr-4'>
                <h1>SELECT SIZE</h1>
                <ion-icon name={openC ? 'menu':'close'} className='cursor-pointer'></ion-icon>
              </div>
              <ul className={`transition-all duration-100 ease-in ${openC ? 'top-28 block':'top-[-490px] hidden'} `}>
                <li><input type='checkbox'className='mr-2 ' />3c/19</li>
                <li><input type='checkbox' className='mr-2 ' />5c/22</li>
                <li><input type='checkbox' className='mr-2 ' />6c/23</li>
                <li><input type='checkbox' className='mr-2 ' />7c/24</li>
                <li><input type='checkbox' className='mr-2 ' />8c/25</li>
                <li><input type='checkbox' className='mr-2 ' />8.5c/26</li>
                <li><input type='checkbox' className='mr-2 ' />9c/27</li>
                <li><input type='checkbox' className='mr-2 ' />10c/28</li>
                <li><input type='checkbox' className='mr-2 ' />11c/29</li>
                <li><input type='checkbox' className='mr-2 ' />11.5c/30</li>
                <li><input type='checkbox' className='mr-2 ' />12c/31</li>
                <li><input type='checkbox' className='mr-2 ' />13c/32</li>
              </ul>
            </div>
            <div className='bg-gray-400 h-[1px] my-6  '></div>
            <div className='my-6'>
              <div onClick={()=>(setOpenD(!openD))} className='flex justify-between font-serif mb-2 mr-4'>
                <h1>CATEGORIES</h1>
                <ion-icon name={openD ? 'menu':'close'} className='cursor-pointer'></ion-icon>
              </div>
              <ul className={`font-serif transition-all duration-100 ease-in ${openD ? 'top-28 block':'top-[-490px] hidden'} `}>
                <li><input type='checkbox'className='mr-2 ' />Male</li>
                <li><input type='checkbox' className='mr-2 ' />Female</li>
                <li><input type='checkbox' className='mr-2 ' />Kids</li>
              </ul>
            </div>
            <div className='bg-gray-400 h-[1px] my-6  '></div>
            <div className='my-6'>
              <div onClick={()=>(setOpenE(!openE))} className='flex justify-between font-serif mb-2 mr-4'>
                <h1>DISCOUNT RANGE</h1>
                <ion-icon name={openE ? 'menu':'close'} className='cursor-pointer'></ion-icon>
              </div>
              <ul className={`font-serif transition-all duration-100 ease-in ${openE ? 'top-28 blocl':'top-[-490px] hidden'} `}>
                <li><input type='checkbox' className='mr-2'/>Not Discounted</li>
                <li><input type='checkbox' className='mr-2'/>1% - 10%</li>
                <li><input type='checkbox' className='mr-2'/>11% - 20%</li>
                <li><input type='checkbox' className='mr-2'/>21% - 30%</li>
                <li><input type='checkbox' className='mr-2'/>31% - 40%</li>
                <li><input type='checkbox' className='mr-2'/>41% - 50%</li>
                <li><input type='checkbox' className='mr-2'/>51% - 60%</li>
              </ul>
            </div>
            <div className='bg-gray-400 h-[1px] my-6'></div>
            <div className='my-6'> 
              <div onClick={()=>(setOpenF(!openF))} className='flex justify-between font-serif mb-2 mr-4'>
                <h1>PRICE</h1>
                <ion-icon name={openF ? 'menu':'close'} className='cursor-pointer'></ion-icon>
              </div>
              <ul className={`transition-all duration-100 ease-in ${openF ? 'top-28 block':'top-[-490px] hidden'} `}>
                <li><input type='checkbox'className='mr-2 ' />Below Rs. 499</li>
                <li><input type='checkbox' className='mr-2 ' />Rs. 500 - RS. 999 </li>
                <li><input type='checkbox' className='mr-2 ' />Rs. 1000 - RS. 1999</li>
                <li><input type='checkbox' className='mr-2 ' />Rs. 2000 - RS. 2999</li>
                <li><input type='checkbox' className='mr-2 ' />Rs. 3000 - RS. 3999</li>
                <li><input type='checkbox' className='mr-2 ' />Rs. 4000 - RS. 4999</li>
                <li><input type='checkbox' className='mr-2 ' />Rs. 5000 - RS. 5999</li>
                <li><input type='checkbox' className='mr-2 ' />Rs. 6000 - RS. 6999</li>
              </ul>
            </div>
          </div>
          <div className='md:w-[80%] sm:w-[60%] ml-4 bg-[#0c4a6e]'>
            <div className="w-full relative select-none">
              <div className="aspect-w-16 aspect-h-6 " >
                  <img src='NewArrivals1.jpg' alt="..." className='w-full' />
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 ps:grid-cols-1 aspect-w-16 aspect-h-6 " >
{/*       
      1st image
      
                <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[340px] md:w[300px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan1.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div> 
       */}
      {/* 2nd image */}
{/*       
                <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[350px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan2.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div> */}

      {/* 3rd image */}
{/*                 
                <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[350px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan3.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div>
                 */}
      {/* 4th image */}
{/*                 
                <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[350px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan1.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div>
       */}
      {/* 5th image */}
{/*      
                <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[350px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan2.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div>
      */}
      {/* 6th image */}
{/*      
                <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[350px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan3.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div> */}
     
     {/* 7ht image */}
                {/* <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[350px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan1.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div> */}
    
    {/* 8th iamge */}
        
                {/* <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[350px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan2.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div> */}

     {/* 9th image           */}
    
                <div className="block rounded-lg bg-white dark:bg-neutral-700 w-[350px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan3.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
