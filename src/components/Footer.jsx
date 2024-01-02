import React from 'react'
import {MdOutlineLocalShipping, MdOutlineCompareArrows} from 'react-icons/md'
import {GiTakeMyMoney} from 'react-icons/gi'
import { ImFacebook } from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'


export default function Footer() {
  return (
    <div className='w-full overflow-hidden'>
        <div className='flex justify-around space-x-8 px-4 h-full text-center my-5'>
                        <div className="mt-20">
                            <MdOutlineLocalShipping className='m-auto lg:text-4xl md:text-3xl ps:text-2xl text-[#0c4a6e] my-4 '/>
                            <p className='font-serif'>Free Shipping For <br /> All Orders</p>
                        </div>
                        <div className="mt-20">
                            <MdOutlineCompareArrows className='m-auto lg:text-4xl md:text-3xl ps:text-2xl  text-[#0c4a6e] my-4'/>
                            <p className='font-serif '>Reverse Pickup</p>
                        </div>
                        <div className="mt-20">
                            <GiTakeMyMoney className='m-auto lg:text-4xl md:text-3xl ps:text-2xl text-[#0c4a6e] my-4'/>
                            <p className='font-serif '>Fixed COD</p>
                        </div>
                </div>
                <div className='text-center'>
                    <h1 className='font-serif text-2xl text-indigo-600 mt-20 mb-8'>STAY CONNECTED</h1>
                </div>
                <div className='flex justify-center gap-2 px-6 mb-6'>
                    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-100 border-2  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500  w-96 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold" placeholder="Enter Your Email Address" />

                    <button className='border-2 bg-gray-400 px-4 rounded-md text-white font-semibold'>Submit</button>
                </div>
        
    <div className="relative flex justify-start md:justify-center md:items-end bg-sky-900 ">
        <img class="absolute dark:hidden object-cover top-10 h-full w-full xl:mt-10 z-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_background.png" alt="background"/>
        <div className="flex pt-16 md:pt-10 lg:pt-12 xl:pt-16   px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
            <div className="flex  flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
                <div className="flex justify-start items-center space-x-4">
                    <div className="cursor-pointer w-12">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_svg1.svg" alt="logo" />
                    </div>
                    <p className="w-60 text-xl xl:text-2xl font-semibold leading-normal text-white">Elador</p>
                </div>
                <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
                    <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                        <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Community</h2>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            About Us
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            Guidelines and how to
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            Quote from the best
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            How to start a blog
                        </button>
                    </div>

                    <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                        <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Getting Started</h2>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            About Us
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            Guidelines and how to
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            Quote from the best
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            How to start a blog
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            Quote from the best
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            Guidelines and how to
                        </button>
                    </div>

                    <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                        <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Resources</h2>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                            Accessibility
                        </button>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                            Usability
                        </button>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                            Marketplace
                        </button>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                            Design & Dev
                        </button>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                            Marketplace
                        </button>
                    </div>
                </div>
            </div>  
            <div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
                <p className="mt-10 md:mt-12 xl:mt-0 text-sm leading-none text-white" >2020 The Good Company. All Rights Reserved</p>
                <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
                    <button className="text-base leading-none text-white hover:text-gray-300">
                        Terms of service
                    </button>
                    <button className="text-base leading-none text-white hover:text-gray-300">
                        Privacy Policy
                    </button>
                    <button className="text-base leading-none text-white hover:text-gray-300">
                        Security
                    </button>
                    <button className="text-base leading-none text-white hover:text-gray-300">
                        Sitemap
                    </button>
                </div>
                <div className="flex  justify-start md:justify-end items-start  w-full md:w-auto md:items-center space-x-6 pb-8 ">
                    <button className="text-white hover:text-gray-200 w-6">
                    <ImFacebook />
                    </button>
                    <button className="text-white hover:text-gray-200 w-6">
                    <BsTwitter />                                      
                    </button>
                    <button className="text-white hover:text-gray-200 w-6">
                    <BsInstagram />                              
                    </button>
                    <button className="text-white hover:text-gray-200 w-6">
                    <BsYoutube />                                 
                    </button>
                    <button className="text-white hover:text-gray-200 w-6">
                    <BsPinterest />                                
                    </button>
                </div>
            </div>
           
        </div>
    </div>

    </div>
  )
}
