import React from 'react';
import OurServiceBox from './elements/OurServiceBox';
import OurServicesData from '@/libs/data/portfolio-data/our-services-data';

function ServicesWhatWedoSection() {
  const ourclients = OurServicesData;
  return (
    <>
      <section>
      <div className='w-[1440px] max-w-full mx-auto'>
        <div className='mb-[50px] text-[18px] text-center text-black-7 font-normal mx-[103px] max-md6:mx-0 leading-[28px]'>
          <p>At Camburg Engineering,  We ensure overall cost containment for our customers with maximum deliverables investing minimum resources. We strive to create value for our customers through our turnkey projects, engineering solutions and trading services.</p>
        </div>
      </div>
      <div className='w-[1440px] max-w-full mx-auto'>
      <div className='gallery-layout-wrapper'>
      {ourclients.map((serviceData) => (
        <OurServiceBox ourservice={serviceData} key={serviceData.id}/>
      ))}
    </div>
      </div>
      <div className='w-[1440px] max-w-full mx-auto'>
        <div className='mb-[50px] text-[18px] text-center text-black-7 font-normal mx-[103px] max-md6:mx-0 leading-[28px]'>
          <p className='mb-[20px]'>Our services encompass layout design, detailed engineering, capacity calculations, HVAC system requirements, cleanroom design, water/wastewater treatment plants, air filtration systems, equipment selection, installation, commissioning, and documentation. </p>
          <p>Additionally, we cater to trading needs for machines and chemicals based on customer requirements.</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default ServicesWhatWedoSection;
