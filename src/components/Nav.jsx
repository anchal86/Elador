import React, { useState } from 'react'
import Button2 from './Button2'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  let Links = [
    {name:"NEW ARRIVALS", link:"/new-arrivals"},
    {name:"WOMEN", link:"/"},
    {name:"MEN", link:"/"},
    {name:"KIDS", link:"/"},
    {name:"BRANDS", link:"/"},
    {name:"Leap7X", link:"/"},

  ];
  const [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 z-50 '>
      <div className='bg-[#0c4a6e] py-2 px-10 shodow-sm justify-between flex w-full md:items-center'>
      <div className='ml-6 ps:ml-2 pm:ml-4  lg:ml-[10px]'>
          <h5 className='text-white'>Get 5% off on orders below 999 and Get 10% off on orders above 999 on prepaid orders</h5>
      </div>
      <div className='mr-4 ps:hidden lg:flex lg:mr-[100px] xl:mr-[200px] 2xl:mr-[20px]'>
          <h5 className='text-white'>STORE LOCATOR | TRACK ORDER</h5>
      </div>
    </div>
      <nav className='md:flex items-center md:justify-between bg-white w-full py-2 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800' onClick={()=>navigate("/")}>
          <span className='text-3xl text-indigo-600 mr-1 pt-2 '>
          <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <h1 className='font-serif text-3xl'>ELADOR</h1>
        </div>
        <div onClick={()=>(setOpen(!open))} className='text-3xl absolute right-8 top-20 cursor-pointer pt-2 md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex ld:mx-8 bg-white md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-[-1] md:space-x-2 md:text-[10px] lg:text-[14px] lg:space-x-8 font-serif left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-28 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-4 font-medium md:my-0 my-7'>
                <a href={link.link} className='text-[#082f49] hover:text-gray-500 duration-500'>{link.name}</a>
              </li>
            ))
          }
          
          <Button2>
            NITRO
          </Button2>
          <Button2>
            FOREVER SNACKERS
          </Button2>
          
          <div className='lg:ml-20 md:ml-6'>
            <li className='md:flex list-none md:ml-8 text-xl cursor-pointer font-medium md:my-0 my-7 space-x-4 md:space-x-6 '>
              <ion-icon name="search-outline" className='mx-2 text-[#082f49] hover:text-gray-500 duration-500'></ion-icon>
              <Link to="/signup"><ion-icon name="person-circle-outline" className='mx-2 text-[#082f49] hover:text-gray-500 duration-500'></ion-icon></Link>
              <ion-icon name="heart-outline" className='mx-2 text-[#082f49] hover:text-gray-500 duration-500 '></ion-icon>
              <Link to="/cart"><ion-icon name="bag-handle-outline" className='mx-2 text-[#082f49] hover:text-gray-500 duration-500'></ion-icon></Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}


export default Nav