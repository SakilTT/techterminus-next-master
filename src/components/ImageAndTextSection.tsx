import React from 'react';

import type { SectionTitleData } from '@/libs/interfaces';
import SectionTitle from './elements/SectionTitle';
import Link from 'next/link';

function ImageAndTextSection() {
  const titleObj: SectionTitleData = {
    SectionTitle: 'ABOUT US',
    SectionMainTitle: 'To Ensure Reliability And <br/> Long Life Services',
  };
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-white-0 py-16 max-md2:py-8 max-md2:flex-col">
      <div className="flex w-[1440px] max-w-full items-center px-[15px] max-md2:flex-col-reverse flex-row-reverse">
        <div className="w-[50%] max-md2:w-full top-[1277px] left-[894px]">
          <img
            src='/images/about-us.png'
            className='w-[710px] h-auto'
            alt='to ensure reliability and
            long life services'
          />
        </div>
        <div className="mr-[20px] w-[50%] max-md2:w-full max-md2:mb-[30px]">
        <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          sectionTitleData={titleObj}
          isWhite={false}
          isCenter={false}
        />
        <div className="z-10 max-w-[1174px] justify-center font-lato font-normal text-[18px] leading-[28px] text-black-7">
          <p>We Camburg Engineering, A one step cost effective solution organization that handles Turnkey project from concept to erection services with optimized solution and valued engineering as per current regulatory guidelines.</p>
          <p className='font-lato font-normal text-[18px] leading-[28px] mt-[20px] mb-[30px]'>Our expertise aids the client in to the way from the planning stage until the start of the production units. We are expert to design and providing most effective services for API unit, Formulation unit, Clean room design, HVAC Systems and Automation of Process for minimize error for handling and safety concerns etc.</p>
        </div>
        <Link href='/about/' className='font-lora font-semibold text-blue-2 text-lg text-center border-[1px] rounded-[5px] border-solid py-[14px] px-[25px] border-blue-2 hover:bg-blue-2 hover:text-white-0 transition-all duration-300 ease-linear'>Learn More</Link>
      </div>
        </div>
        
      </div>
    </section>
  );
}

export default ImageAndTextSection;
