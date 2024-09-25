import React from 'react';

import type { SectionTitleData } from '@/libs/interfaces';
import SectionTitle from './elements/SectionTitle';

function AboutImageAndTextSection() {
  const titleObj: SectionTitleData = {
    SectionTitle: 'ABOUT US',
    SectionMainTitle: 'To Ensure Reliability And <br/> Long Life Services',
  };
  return (
    <>
    <section className="flex flex-col items-center justify-center gap-8 bg-white-0 pt-16 xl:flex-row">
      <div className="flex w-[1440px] max-w-full px-5 flex-row-reverse items-center">
        <div className="w-[50%] top-[1277px] left-[894px] max-md2:w-full">
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
            <p>Camburg Engineering is a distinguished and cost-effective organization that specializes in providing turnkey project solutions from concept to erection, aligned with optimized solutions and value engineering adhering to current regulatory guidelines. With our expertise, we support clients throughout the planning stage until the commencement of production units. Our core capabilities lie in designing and delivering highly effective services for API Units, Pharmaceutical Formulation Units, Nutraceutical Units, Dermaceutical Units and Medical Devices Units. We are also experts in designing and providing most effective services as Clean room partition, HVAC Systems, Utilities Machinery, Electrical projects aimed at minimizing errors and ensuring safety compliance.</p>
          </div>
        
        </div>
        </div>
        
      </div>
    </section>
    <section className="flex flex-col items-center justify-center gap-8 bg-white-0 xl:flex-row mb-[100px]">
      <div className='flex w-[1440px] max-w-full justify-center mx-auto'>
        <div className='text-[18px] ml-[20px] text-black-7'>
        <p>At Camburg Engineering, we strive for excellence in everything we do, and we take pride in guiding our clients towards new horizons through our innovative designs and exceptional services. Our clients benefit from our innovative designs, top-tier quality, and timely delivery of services, all customized to meet their specific requirements. We believe that effective technical support and a commitment to enhancing our work are crucial elements in achieving customer satisfaction.</p>
        <p className='mb-[50px]'>Integrity is at the heart of our business operations, and we are dedicated to providing professional services to all our clients, ensuring transparency in the solutions we develop. Our commitment extends beyond our organization, as we emphasize skill and technology transfer to our staff and the communities we serve.</p>
        <h3 className='mb-[30px] leading-[30px] text-[24px] font-lora font-semibold '>Goals</h3>
        <p className='mb-[50px]'>Building bridges for your dreams by striving for the highest levels of innovation, skill, and competence in our field. Providing superior quality products and services with timely delivery, surpassing customer expectations.</p>
        <h3 className='leading-[30px] mb-[30px] text-[24px] font-lora font-semibold  '>Business Planning</h3>
        <p>We continually improve our services through goal review, effective business planning, and by enhancing the skills and competencies of our workforce.</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default AboutImageAndTextSection;
