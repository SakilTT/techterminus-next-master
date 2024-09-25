import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="bg-[#F8F8F8] py-[80px] font-raleway text-base text-white-0 max-md6:py-[40px]">
        <div className="mx-auto grid w-[1440px] max-w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-md6:grid-cols-1 px-[15px]">
          <div>
          <Link href="/"> 
            <img
              className="h-[65px] w-auto"
              src={`/images/camburg-logo.svg`}
              alt="Camburg logo"
            />
          </Link>
            <p className="font-lora font-semibold text-[26px] text-black-100 mt-[60px] mb-[40px]">
                Follow Us On :
            </p>
            <ul className="flex flex-row flex-wrap gap-3">
            <li className="p-2 transition-all duration-300 ease-linear ">
                <a
                  href="https://instagram.com/camburgengineering?igshid=MmU2YjMzNjRlOQ=="
                  title='Opens in a new window'
                  target="_blank"
                  className=""
                >
                    <span className='bg-[url(/images/icons/instab.svg)] w-[30px] h-[30px] bg-contain bg-no-repeat inline-block bg-center'></span>
                </a>
              </li>
              <li className="p-2 transition-all duration-300 ease-linear ">
                <a
                  href="https://www.linkedin.com/company/camburg-engineering/"
                  title='Opens in a new window'
                  target="_blank"
                  className=""
                >
                  <span className='bg-[url(/images/icons/linkedin.svg)] w-[30px] h-[30px] bg-contain bg-no-repeat inline-block bg-center'></span> 
                </a>
              </li>
              <li className="p-2 transition-all duration-300 ease-linear ">
                <a
                  href="https://www.facebook.com/profile.php?id=100095400091730&mibextid=ZbWKwL"
                  title='Opens in a new window'
                  target="_blank"
                  className=""
                >
                   <span className='bg-[url(/images/icons/fb.svg)] w-[30px] h-[30px] bg-contain bg-no-repeat inline-block bg-center'></span>
                </a>
              </li>
              <li className="p-2 transition-all duration-300 ease-linear">
                <a
                  href="https://wa.me/message/DUZR6Z7IAN6JH1"
                  title='Opens in a new window'
                  target="_blank"
                  className=""
                >
                   <span className='bg-[url(/images/icons/wp.svg)] w-[30px] h-[30px] bg-contain bg-no-repeat inline-block bg-center'></span>
                </a>
              </li>
            </ul>
          </div>
        
          <div className="max-sm:mt-8 max-md6:mt-10">
            <h4 className="font-lora text-[26px] font-semibold leading-[33.28px] text-black-100">
              Quick Links
            </h4>
            <ul className="mt-[40px] flex flex-col gap-5">
              <li className="flex flex-row items-center">
              
                <Link
                  href="/"
                  className="ml-5 font-lato font-medium text-[18px] leading-[21.6px] text-black-100"
                >
                  Home
                </Link>
              </li>
              <li className="flex flex-row items-center">
               
                <Link
                  href="/about"
                  className="ml-5 font-lato font-medium text-[18px] leading-[21.6px] text-black-100"
                >
                  About Us/Who We Are{' '}
                </Link>
              </li>
              <li className="flex flex-row items-center">
               
                <Link
                  href="/gallery"
                  className="ml-5 font-lato font-medium text-[18px] leading-[21.6px] text-black-100"
                >
                  Gallery{' '}
                </Link>
              </li>
              <li className="flex flex-row items-center">
              
                <Link
                  href="/services"
                  className="ml-5 font-lato font-medium text-[18px] leading-[21.6px] text-black-100"
                >
                  Services/What We Do
                </Link>
              </li>
              <li className="flex flex-row items-center">
              
                <Link
                  href="/our-clients"
                  className="ml-5 font-lato font-medium text-[18px] leading-[21.6px] text-black-100"
                >
                  Our Clients
                </Link>
              </li>
              <li className="flex flex-row items-center">
              
                <Link
                  href="/contact-us"
                  className="ml-5 font-lato font-medium text-[18px] leading-[21.6px] text-black-100"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-sm:mt-8 max-md6:mt-10">
            <h4 className="font-lora text-[26px] font-semibold leading-[33.28px] text-black-100">Contact Us</h4>
            <ul className="mt-[40px] flex flex-col gap-[30px] text-gray-5">
            <li className="flex flex-row items-center">
            <span className='bg-[url(/images/icons/phoneb.svg)] w-[20.89px] h-[20.93px] bg-contain bg-no-repeat inline-block'>
              
                </span>
                <div className="ml-5 font-lato font-medium text-[18px] text-black-100">
                  +91-8849541144 <br/>
                  +91-7802808042
                </div>
                
              </li>
              
              <li className="flex flex-row items-center">
              <span className='bg-[url(/images/icons/mailb.svg)] w-[20px] h-[16px] bg-contain bg-no-repeat inline-block'>
                </span>
                <div className="ml-5 font-lato text-[18px] font-medium leading-[21.6px] text-black-100">
                  info@camburg-engineering.com
                </div>
              </li>
              <li className="flex flex-row items-center">
              <span className='bg-[url(/images/icons/locationb.svg)] w-[18px] h-[22px] bg-contain bg-no-repeat inline-block'>
              </span>
                <div
                  className="ml-5 font-lato text-[18px] font-medium leading-[21.6px] text-black-100"
                >
                  F-21,Kanha Height -2,
                  <br /> Kapurai Road, Somatalav,
                  <br /> Vadodara-390025
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] items-center font-lato border-black-overlayThumb font-normal text-[16px] leading-[19.2px] bg-white-400 py-5 text-center text-black-100">
        <div className="mx-auto flex w-[1440px] max-w-full px-[15] justify-center max-md:flex-col max-md:justify-center">
          <div>Copyright {new Date().getFullYear()} Camburg Engineering&nbsp;&nbsp;|&nbsp;&nbsp;All Rights Reserved &nbsp;&nbsp;|&nbsp;&nbsp; Designed & Developed by Timestech Softwares</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
