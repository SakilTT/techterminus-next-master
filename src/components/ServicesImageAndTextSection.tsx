import React from 'react';

import type { SectionTitleData } from '@/libs/interfaces';
import SectionTitle from './elements/SectionTitle';

function ServicesImageAndTextSection() {
  const titleObj: SectionTitleData = {
    SectionTitle: 'Our Design Philosophy',
    SectionMainTitle: 'Simple, Reliable, and Cost-Effective',
  };
  return (
    <>
    <section className="flex flex-col items-center justify-center gap-8 bg-white-0 pt-16 xl:flex-row mb-[100px]">
      <div className="flex w-[1440px] max-w-full px-5 flex-row-reverse  max-md2:flex-col-reverse items-center">
        <div className="w-[50%] max-md2:w-full top-[1277px] left-[894px]">
          <img
            src='/images/services.png'
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
            <p>Our design systems are grounded in simplicity, reliability, and cost-effectiveness. All our services and equipment adhere to stringent quality standards, such as IS, WHO-GMP, USFDA, MHRA, TGA, and CGMP norms, as well as customer-specific User Requirement Specifications (URS). Through meticulous study of the customer's URS, we ensure compatibility with successful processes and make recommendations for improvements to achieve optimal outcomes while preserving the product's active characteristics.</p>
          </div>
        
        </div>
        </div>
        
      </div>
    </section>
    </>
  );
}

export default ServicesImageAndTextSection;
