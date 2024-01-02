import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";



const CartCheckout = () => {
  const [openA1, setOpenA1] = useState(true);

  return (
    <div className='w-full h-full mt-32'>
        <div className='flex mb-8 justify-center '>
            <div className='px-16 bg-white ml-6 mr-0 my-6 rounded-l-lg border-2 shadow-md'>
                <h1 className='text-3xl font-semibold font-serif text-center my-8'>Shopping Cart</h1>
                <hr className='w-full h-1 my-2'></hr>
                <div className='flex my-4 space-x-10'>
                    <img src='tan1.jpg' alt='img' className='w-[100px]'/>
                    <div className='mt-4 font-serif'>
                        <p>Shirt</p>
                        <p>Cotton T-shirt</p>
                    </div>
                    <div className='flex space-x-4 mt-4'>
                        <input className='w-[80px] px-4 h-10 border-2 border-black ' type="number" min="0" defaultValue={1} size="sm"/>
                    </div>
                    <p className='mt-5 font-serif'>price</p>
                    
                    <div onClick={()=>(setOpenA1(!openA1))} className='flex justify-between font-serif mb-2 mr-4'>
                    <ion-icon name={openA1 ? 'menu':'close'} className='cursor-pointer'></ion-icon>
                    </div>

                    <RxCross2 className='mt-6 font-serif'/>
                </div>
                <hr className='w-full h-1 my-1'></hr>
                <div className='flex my-4 space-x-10'>
                    <img src='tan1.jpg' alt='img' className='w-[100px]'/>
                    <div className='mt-4 font-serif'>
                        <p>Shirt</p>
                        <p>Cotton T-shirt</p>
                    </div>
                    <div className='flex space-x-4 mt-4'>
                        <input className='w-[80px] px-4 h-10 border-2 border-black ' type="number" min="0" defaultValue={1} size="sm"/>
                    </div>
                    <p className='mt-5 font-serif'>price</p>
                    <RxCross2 className='mt-6 font-serif'/>
                </div>
                <hr className='w-full h-1 my-2'></hr>
                <div className='flex my-4 space-x-10'>
                    <img src='tan1.jpg' alt='img' className='w-[100px]'/>
                    <div className='mt-4 font-serif'>
                        <p>Shirt</p>
                        <p>Cotton T-shirt</p>
                    </div>
                    <div className='flex space-x-4 mt-4'>
                        <input className='w-[80px] px-4 h-10 border-2 border-black ' type="number" min="0" defaultValue={1} size="sm"/>
                    </div>
                    <p className='mt-5 font-serif'>price</p>
                    <RxCross2 className='mt-6 font-serif'/>
                </div>

                <hr className='w-full h-1 my-2'></hr>

                <Link to="/new-arrivals">
                    <div className='flex space-x-4 my-10'>
                        <FaLongArrowAltLeft className='mt-1'/>
                        <p>Back to shop</p>
                    </div>
                </Link>
            </div>
            <div className='px-16 bg-gray-100 my-6 rounded-r-lg border-2 shadow-md '>
                <h1 className='text-3xl text-black font-semibold text-center my-8 font-serif'>Price Details</h1>
                <hr className='w-full h-1 my-4 border-black'></hr>
            <div>
                <div className='flex justify-around space-x-32 mt-4'>
                    <h1 className='text-lg font-serif'>Price (item)</h1>
                    <p className='text-lg font-serif'>Amount</p>
                </div>

                <div className='flex justify-around space-x-32 mt-4'>
                    <h1 className='text-lg font-serif'>Discount</h1>
                    <p className='text-lg font-serif text-green-500'>- ₹200</p>
                </div>

                <div className='flex justify-around space-x-32 mt-4'>
                    <h1 className='text-lg font-serif'>Delivery Charges</h1>
                    <p className='text-lg font-serif'>₹40</p>
                </div>

                <hr className='w-full h-1 my-4 mt-4 border-black'></hr>

                <div className='flex justify-around space-x-32 mt-4'>
                    <h1 className='text-2xl font-serif font-medium'>Total Amount</h1>
                    <p className='text-2xl font-serif font-medium'>₹249</p>
                </div>

                <hr className='w-full h-1 my-4 mt-4 border-black'></hr>

                <p className='text-lg font-serif text-green-700'>You will save ₹200 on this order</p>
               
                <button className='text-white bg-black p-3 px-8 font-serif my-10 rounded-sm text-md'>
                    PLACE ORDER
                </button>

                <div className='flex space-x-2'>
                    <GoShieldCheck className='text-2xl mt-2'/>
                    <p className='text-gray-600'>Safe and Secure Payments. Easy returns. <br />100% Authentic products.</p>
                </div>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default CartCheckout