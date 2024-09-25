import Link from 'next/link';
import React from 'react';

function OurOffices() {
  return (
    <div className="flex items-center flex-col xl:justify-end 2xl:justify-center">
      <div className='w-[1260px] max-w-full mx-auto mb-[50px] '>
        <div className='text-[18px] text-center text-black-7 font-normal mx-[103px] max-md6:mx-0 leading-[28px]'>
          <p>We welcome inquiries from prospective clients and look forward to offering our expertise to address your needs. For more information or any queries, please feel free to contact us. Your success is our priority, and we are here to assist you every step of the way.</p>
        </div>
      </div>
      <div className="w-[1260px] max-w-full mx-auto px-5">
        <ul className="my-5 flex flex-row text-black-3 flex-wrap max-md6:flex-col">
          <li className="flex flex-col justify-center text-center flex-1 max-lg:w-[50%] max-md6:!w-full max-lg:mb-[30px]">
            <div className='mx-[30px] px-[30px] max-md6:mx-[0px] pt-[32px] pb-[50px] shadow-contactBox min-h-[355px]'>
            <div className='flex justify-center mb-5'>
             <img src="/images/icons/contact-phone.png" className='w-[95px] h-auto'/>
            </div>
            <Link
              className="leading-8 justify-center"
              href=""
            >
              <h4 className="font-lora text-[32px] leading-[41px] font-medium text-blue-2">
              Call Us On
              </h4>
              <div className='text-[24px] mt-[10px]'>
              +91-8849541144
              <br /> +91-7802808042
              </div>
            </Link>
            </div>            
          </li>
          <li className="flex flex-col justify-center text-center flex-1 max-lg:w-[50%] max-md6:!w-full max-lg:mb-[30px]">
            <div className='mx-[30px] px-[30px] max-md6:mx-[0px] pt-[32px] pb-[50px] shadow-contactBox min-h-[355px]'>
            <div className='flex justify-center mb-5'>
            <img src="/images/icons/contact-email.png" className='w-[95px] h-auto'/>
            </div>
            <Link
              className="leading-8 justify-center"
              href=""
            >
              <h4 className="font-lora text-[32px] leading-[41px] font-medium text-blue-2">
              Mail Us On
              </h4>
              <div className='text-[24px] mt-[10px]'>
              info@camburg-engineering.com
              </div>
            </Link>
            </div>            
          </li>
          <li className="flex flex-col justify-center text-center flex-1 max-lg:w-[50%] max-md6:!w-full max-lg:mb-[30px]">
            <div className='mx-[30px] px-[30px] max-md6:mx-[0px] pt-[32px] pb-[50px] shadow-contactBox min-h-[355px]'>
            <div className='flex justify-center mb-5'>
            <img src="/images/icons/contact-location.png" className='w-[95px] h-auto'/>
            </div>
            <Link
              className="leading-8 justify-center"
              href=""
            >
              <h4 className="font-lora text-[32px] leading-[41px] font-medium text-blue-2">
              Address
              </h4>
              <div className='text-[24px] mt-[10px]'>
              F-21, Kanha Height -2, Kapurai Road, Somatalav, Vadodara-390025.
              </div>
            </Link>
            </div>            
          </li>
        </ul>
        <div className='flex justify-center items-center mt-[100px] max-md6:mt-[0px]'>
          <div className='mr-[70px] text-[36px] text-black-7 font-lora leading-[46px]'>Follow Us On :</div>
          <ul className='flex'>
            <li className='mr-[30px]'><a href="https://instagram.com/camburgengineering?igshid=MmU2YjMzNjRlOQ==" title='Opens in a new window' target="_blank"> <img src="/images/icons/instagram.png" className='w-[68px] h-auto'/></a></li>
            <li><a href="https://www.linkedin.com/company/camburg-engineering/" title='Opens in a new window' target="_blank"> <img src="/images/icons/linkedin.png" className='w-[68px] h-auto'/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurOffices;
