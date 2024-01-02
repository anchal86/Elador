import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataSlider } from '../data';




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

   
const Myslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='relative m-20 aspect-w-16 aspect-h-6 lg:mt-24 md:mt-28 ps:mt-32'>
      
      <Slider {...settings}>
        {dataSlider.map(item=>(
          <div className='card md:'>
            <div className='card-top'>
              <img src={item.src} alt="" className='w-[80%] h-full object-cover m-auto'/>
              <h1 className='text-sm my-5 mx-1 font-serif'>{item.desc}</h1>
            </div>
            <div className='card-bottom font-serif mt-4'>
              <h3 className='category '>{item.cost}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Myslider