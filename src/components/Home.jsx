import React ,{useState} from 'react'
import { BsChevronRight, BsChevronLeft} from 'react-icons/bs'
import Myslider from './Myslider';
import Button from './Button';

const featuredImages = ['slideImg2.jpg', 'slideImg.jpg'];
let count = 0;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnNextClick = () => {
      count = (count + 1) % featuredImages.length;
      setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
  const productsLength = featuredImages.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
  };

  
  return (
    <div className='px-4'>
      <div className="max-w-screen-xl m-auto ">
        <div className="w-full relative select-none">
          <div className="aspect-w-16 aspect-h-6 md:mt-28 ps:mt-32" >
              <img src={featuredImages[currentIndex]} alt="..." />
          </div>

          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
              <BsChevronLeft onClick={handleOnPrevClick} className="bg-slate-100 rounded-full" size={40}/>
              <BsChevronRight onClick={handleOnNextClick} className="bg-slate-100 rounded-full" size={40}/>
          </div>
        </div>
        <div>
          <h1 className='font-serif text-[#344e41] font-medium text-center mt-14 text-[40px]'>SHOP BY CATEGORIES</h1>

          <div className='flex justify-center space-x-12 text-[#7a7873] my-5 pb-8 cursor-pointer font-semibold '>
            <p className='underline underline-offset-8 hover:underline hover:text-[#621708]'>MEN</p>
            <p className='underline underline-offset-8 hover:underline hover:text-[#621708]'>WOMEN</p>
            <p className='underline underline-offset-8 hover:underline hover:text-[#621708]'>KIDS</p>
          </div>

          <div className='lg:gap-10 md:gap-10 sm:gap-10 py-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:items-center sm:mx-40 sm:items-center lg:items-center md:mx-10 ps:mx-20 '>

            <div className='rounded overflow-hidden shadow-lg max-w-sm mb-4 py-4 px-2'>
              <img src='men1.jpg' alt='img' className='w-[400px] h-[330px] rounded-lg' />
              <h1 className='font-serif font-semibold mb-2 text-xl pt-4'>Flip-Flops</h1>
              <p className='font-medium text-[#38411c]  mb-3'>Put your best foot forward with these flip flops</p>
              <Button className='mx-auto font-bold'>SHOP FLIP-FLOPS</Button>
            </div>

            <div className='rounded overflow-hidden shadow-lg max-w-sm mb-4 py-4 px-2'>
              <img src='men2.jpg' alt='img' className='w-[400px] h-[330px] rounded-lg'/>
              <h1 className='font-serif font-semibold mb-2 text-xl pt-4'>Formal Shoes</h1>
              <p className='font-medium text-[#38411c] mb-3'>Some utterly stylish formal shoes for all your office events</p>
              <Button className='font-bold'>SHOP SHOES</Button>
            </div>
            <div className='rounded overflow-hidden shadow-lg max-w-sm mb-4 py-4 px-2'>
              <img src='men3.jpg' alt='img' className='w-[400px] h-[330px] rounded-lg'/>
              <h1 className='font-serif font-semibold mb-2 text-xl pt-4'>Sportswear / Athleisure</h1>
              <p className='font-medium text-[#38411c] mb-3'>Get the sporty look and inspiration with us</p>
              <Button className='font-bold' >Shop Sportswear / Athleisure</Button>
            </div>

            <div className='rounded overflow-hidden shadow-lg max-w-sm mb-4 py-4 px-2'>
              <img src='men4.jpg' alt='img' className='w-[400px] h-[330px] rounded-lg'/>
              <h1 className='font-serif font-semibold mb-2 text-xl pt-4'>Casual Sandals</h1>
              <p className='font-medium text-[#38411c] mb-3'>Meet your match with these everyday casual sandals</p>
              <Button className='font-bold'>SHOP CASUAL </Button>
            </div>

          </div>

          <div className='flex justify-center space-x-12 text-[#7a7873] my-5 pb-8 cursor-pointer font-semibold'>
            <p className='underline  underline-offset-8 hover:underline hover:text-[#621708]'>NEW ARRIVALS</p>
            <p className='underline underline-offset-8 hover:underline hover:text-[#621708]'>BEST SELLERS</p>
          </div>
          <main >
              <h1 className='font-bold text-[32px] text-center mt-[50px] mb-[50px]'>NEW ARRIVALS</h1>
              <Myslider/>
          </main>

        </div>
      <div className='max-w-full h-auto m-auto font-serif border-dotted text-[#344e41] mt-24'>
          <div className=" w-full relative select-none  ">
            <div className="flex lg:aspect-w-16 lg:aspect-h-6 justify-center space-x-6 mt-20 " >
              <div>
                <img src='ayushmann.webp' alt='img' className='ps:mb-10' />
              </div>
              <div>
                <img src='rakul.webp' alt='img' className='ps:mb-10' />
              </div>
              
            </div>
          </div>
      </div>
      

      <h1 className='font-serif text-2xl font-semibold text-[#3e5c76] text-center mt-[90px] mb-4 shadow-md w-[340px] m-auto'>MOST LOVED BRANDS </h1>
        
        <div className='max-w-full h-auto m-auto font-serif border-dotted text-[#344e41] mt-24'>
          <div className=" w-full relative select-none  ">
            <div className="flex lg:aspect-w-16 lg:aspect-h-6 justify-center mt-20 ps:space-x-4 " >
              <div className='lg:items-center md:items-center sm:items-center m-auto lg:ml-12 md:ml-8 sm:ml-6 es:ml-8 lg:mr-12 md:mr-8 sm:mr-6 es:mr-8'>
                <img src='ampm.jpg' alt='img' className=''/>
                <img src='logon.svg' alt='logo' className='m-auto ' />
                <button className='font-serif border-dotted text-[#344e41] hover:text-[#621708]  m-auto w-[200px] flex justify-center sm:text-sm md:text-lg font-semibold  shadow-lg mb-10'>SHOP NOW</button>
              </div>
              <div className='max-w-full h-auto lg:items-center md:items-center sm:items-center m-auto lg:ml-12 md:ml-8 sm:ml-6 es:ml-8 lg:mr-12 md:mr-8 sm:mr-6 es:mr-8 '>
                <img src='Healers.webp' alt='img' className=''/>
                <img src='brands.svg' alt='logo' className='m-auto mt-10' />
                <button className='font-serif border-dotted text-[#344e41] hover:text-[#621708] m-auto w-[200px]  flex justify-center sm:text-sm md:text-lg font-semibold mt-10 shadow-lg mb-10'>SHOP NOW</button>
              </div>
              
            </div>
          </div>
        </div>
        

        <div className='max-w-full h-auto m-auto font-serif border-dotted text-[#344e41] mt-24'>
          <div className=" w-full relative select-none  ">
            <div className="flex lg:aspect-w-16 lg:aspect-h-6 justify-center mt-2 ps:space-x-4 " >
              <div className='lg:items-center md:items-center sm:items-center m-auto lg:ml-12 md:ml-8 sm:ml-6 es:ml-8 lg:mr-12 md:mr-8 sm:mr-6 es:mr-8'>
                <img src='zindgi.webp' alt='img' className=''/>
                <img src='love.svg' alt='logo' className='m-auto mt-10' />
                <button className='absolute font-serif border-dotted text-[#344e41] hover:text-[#621708]  m-auto w-[200px] flex justify-center sm:text-sm md:text-lg font-semibold mt-10 shadow-lg mb-10'>SHOP NOW</button>
              </div>
              <div className='max-w-full h-auto lg:items-center md:items-center sm:items-center m-auto lg:ml-12 md:ml-8 sm:ml-6 es:ml-8 lg:mr-12 md:mr-8 sm:mr-6 es:mr-8 '>
                  <img src='luke.jpg' alt='img' className='mt-24'/>
                  <img src='lucyluke.svg' alt='logo' className='m-auto mt-10' />
                  <button className='font-serif border-dotted text-[#344e41] hover:text-[#621708] m-auto w-[200px]  flex justify-center sm:text-sm md:text-lg font-semibold mt-10 shadow-lg mb-10'>SHOP NOW</button>
              </div>
              
            </div>
          </div>
        </div>

        <div className='font-serif border-dotted text-[#344e41] border-2 m-auto mt-24 w-[200px] border-[#868b60] flex justify-center text-lg font-semibold lg:items-center md:items-center sm:items-center'>
          <button>View All Brands</button>
        </div>
        <div className='max-w-full h-auto m-auto font-serif border-dotted text-[#344e41] mt-24'>
          <div className=" w-full relative select-none  ">
            <div className="flex lg:aspect-w-16 lg:aspect-h-6 justify-center mt-20 " >
              <div>
                <img src='Summer.webp' alt='summer' />
              </div>
              <div>
                  <img src='here.webp' alt='here' />
              </div>
              
            </div>

            <div className="absolute w-full m-auto top-1/2 transform -translate-y-1/2 items-center px-3">
                <h1 className='text-white md:text-8xl sm:text-4xl ps:text-4xl font-serif text-center'>Summer is Here! </h1>
                <p className='text-white md:text-3xl sm:text-xl font-serif text-center' >SO IS OUR COLLECTION</p>

              <div className='font-serif font-semibold flex hover:text-[#621708] mt-4'>
                <button className='m-auto border-2 bg-white w-[200px] sm:text-sm md:text-lg shadow-md'>SHOP WOMEN</button>
                <button className='m-auto border-2 bg-white w-[200px]  sm:text-sm md:text-lg shadow-md'>SHOP MEN</button>
              </div>

            </div>
          </div>

        </div>
        
        
      <div className=" w-full relative select-none mb-24 ">
          <div className="flex aspect-w-16 aspect-h-6 justify-center mt-20" >
            <img src='banner.jpeg' alt='summer' />
          </div>

          <div className="absolute ml-20 top-1/2 transform -translate-y-1/2  px-3">
              <h1 className='text-white text-xl font-serif text-left'>COME VISIT US AT ANY OF OUR STORES!</h1>
              

            <div className='font-serif font-semibold flex hover:text-[#621708] mt-5 ml-20 '>
              <button className=' border-2 bg-white w-[160px] py-1 shadow-md'>Find Your Store</button>
            </div>

          </div>
      </div>


    </div>
    </div>
  )
}

export default Home