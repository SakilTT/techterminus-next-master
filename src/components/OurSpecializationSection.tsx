import React from 'react';
import SectionTitle from './elements/SectionTitle';
import { SectionTitleData } from '@/libs/interfaces';

const OurSpecializationSection = () => {
  const titleObj: SectionTitleData = {
    SectionTitle: 'OUR SPECIALIZATION',
    SectionMainTitle: 'Complete Manufacturing Unit Setup',
  };
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-white-0 py-16 max-md2:pb-[80px] xl:flex-row">
    <div className="flex w-[1440px] max-w-full px-5 flex-row max-md2:flex-wrap-reverse items-center">
    <div className="mr-[120px] w-[50%] max-md2:w-full max-md2:mr-[0px]">
        <img
          src='/images/our-specialization.png'
          className='max-w-full h-auto max-md2:w-full'
          alt='to ensure reliability and
          long life services'
        />
      </div>
      <div className="w-[50%] max-md2:w-full max-md2:mb-[30px]">
      <div className="mx-auto max-w-[1200px]">
      <SectionTitle
        sectionTitleData={titleObj}
        isWhite={false}
        isCenter={false}
      />
      <div className="z-10 max-w-[1174px] justify-center font-lato font-normal text-[18px] leading-[28px] text-black-7">
        <p>With extensive experience in setting up manufacturing units, we cater to various product categories, including fluids, injectables, tablets, capsules, liquid orals, powders, bulk drugs, allopathic, hard & soft gelatin capsules, and ayurvedic manufacturing units. Our expertise encompasses the utilization of fundamental manufacturing technology to create efficient and productive setups.</p>
      </div>
    </div>
      </div>
    </div>
  </section>
  );
};

export default OurSpecializationSection;
