import React from 'react';
import Slider from 'react-slick';

import HomeClientsData from '@/libs/data/HomeClientsData';

const HomeClientsSection = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="py-5 text-center min-h-[375px] max-md2:min-h-[200px] flex items-center justify-center bg-outClient">
      <div className="max-w-full py-[50px]">
        <Slider {...settings}>
          {HomeClientsData.map((item) => (
            <div key={item.id} className='text-center flex justify-center px-[40px]'>
              <img src={item.src} alt={item.alt} className='inline-flex items-center max-w-full h-[80px] mx-auto my-auto' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeClientsSection;
