import React from 'react'
import { dataCard } from '../data';
  
const Card = () => {
 return (
    <div className='flex flex-wrap m-4 aspect-w-16 aspect-h-6 lg:mt-12 md:mt-16 ps:mt-20 border-cyan-500 border-2'>
        {dataCard.map(item=>(
          <div className='w-[30%] m-3 bg-white  dark:bg-neutral-700'>
            <div className='w-[100%]'>
              <img src={item.src} alt="" className='w-full h-full rounded-t-lg object-cover m-auto'/>
            </div>
            <div className='card-bottom font-serif mt-4'>
              <h3 className='m-2 text-white'>{item.cost}</h3>
              <h1 className='mx-2 font-serif mb-4 text-base text-neutral-600 dark:text-neutral-200'>Some quick example text to build on the card title and make up the bulk of the card's content.</h1>
              
              <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
              >
                Button
              </button>
            </div>
          </div>
        ))}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 ps:grid-cols-1 aspect-w-16 aspect-h-6'></div>

<div className="block rounded-lg bg-white dark:bg-neutral-700 w-[340px] md:w[300px] m-2">
                  <img className="rounded-t-lg w-full h-72" src="tan1.jpg" alt="..."  />
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      
                    </p>
                    <button type="button" className="inline-block rounded bg-primary bg-slate-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Button
                    </button>
                  </div>
                </div> 
    </div>
  )
}

export default Card