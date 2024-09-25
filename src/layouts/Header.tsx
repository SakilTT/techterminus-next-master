import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const router = useRouter();

  return (
    <header
      className={`z-[999] w-full border-b border-white-100 lg:bg-gray-12 max-[1150px]:justify-between ${
        isSticky ? 'fixed left-0 top-0 z-[99] animate-slideDown' : 'absolute'
      }`}
    >
      <div className='w-[1440px] mx-auto flex items-center justify-between max-w-full px-[15px] z-[999] max-lg:bg-gray-12'>
        <div className="w-[23%] max-xl:w-[350px] max-[1150px]:w-auto py-[7px] ">
          <Link href="/"> 
            <img
              className="h-[65px] max-lg:max-w-[150px] w-auto"
              src={`${router.basePath}/images/camburg-logo.svg`}
              alt="Camburg logo"
            />
          </Link>
        </div>
        <div className='flex items-center max-lg:hidden'>
          <div>
            <ul className='flex '>
              <li>
                <a href="mailto:info@camburg-engineering.com" className='flex items-center'>
                  <span className='bg-[url(/images/icons/envelope.svg)] w-[20px] h-[20px] bg-contain bg-no-repeat inline-block bg-center'></span>
                  <span className='ml-[15px] font-medium'>info@camburg-engineering.com</span>
                </a>
              </li>
              <li className='ml-[40px]'>
                <a href="tel:+91884-954-1144" className='flex items-center'>
                  <span className='bg-[url(/images/icons/phone.svg)] w-[20px] h-[20px] bg-contain bg-no-repeat inline-block bg-center'></span>
                  <span className='ml-[15px] font-medium'>+91-8849541144</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
          <ul className='flex ml-[80px]'>
            {/** insta **/}
              <li>
                <a href="https://instagram.com/camburgengineering?igshid=MmU2YjMzNjRlOQ==" title='Opens in a new window' target="_blank" className='flex items-center'>
                  <span className='bg-[url(/images/icons/insta2.svg)] w-[20px] h-[20px] bg-contain bg-no-repeat inline-block bg-center'></span>
                </a>
              </li>
              {/** linkedin **/}
              <li className='ml-[20px]'>
                <a href="https://www.linkedin.com/company/camburg-engineering/"  title='Opens in a new window' target="_blank" className='flex items-center'>
                  <span className='bg-[url(/images/icons/linkedin2.svg)] w-[20px] h-[20px] bg-contain bg-no-repeat inline-block bg-center'></span>
                </a>
              </li>
              {/** facebook **/}
              <li className='ml-[20px]'>
                <a href="https://www.facebook.com/profile.php?id=100095400091730&mibextid=ZbWKwL" title='Opens in a new window' target="_blank" className='flex items-center'>
                  <span className='bg-[url(/images/icons/fb2.svg)] w-[20px] h-[20px] bg-contain bg-no-repeat inline-block bg-center'></span>
                </a>
              </li>
              {/** whatsapp **/}
              <li className='ml-[20px]'>
                <a href="https://wa.me/message/DUZR6Z7IAN6JH1" title='Opens in a new window' target="_blank" className='flex items-center'>
                  <span className='bg-[url(/images/icons/wp2.svg)] w-[20px] h-[20px] bg-contain bg-no-repeat inline-block bg-center'></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <i   className="ot-flaticon-menu hidden max-lg:block text-black-7 text-[28px] box-border w-[50px] h-[10px] cursor-pointer leading-[0] italic"
    onClick={toggleMobileMenu}
  ></i>
      </div>
      <div className={`z-[-1] w-[1440px] mx-auto flex items-center justify-between max-lg:fixed max-lg:w-full ${
        isSticky && 'lg:hidden'
      }`}>
        <nav  className={`bg-secondMenu overflow-hidden max-lg:bg-white-0 text-black p-4 py-[15px] max-lg:px-[30px] fixed top-20 right-0 left-0 max-lg:top-[-1000px] transition-all duration-300 ease-in-out ${
    mobileMenuOpen ? 'active max-lg:top-[79px]' : ''
  }`}
>
          <ul className="flex items-center justify-center space-x-16 max-lg:flex-col max-lg:justify-start max-lg:items-start">
            <li className='max-lg:!ml-0 max-lg:mb-[20px]'>
              <Link href="/" className="font-lato text-white-0 max-lg:text-black-7 text-[18px] font-medium leading-[21.6px]">Home</Link>
            </li>
            <li className='max-lg:!ml-0 max-lg:mb-[20px]'>
              <Link href="/about" className="font-lato text-white-0 max-lg:text-black-7 text-[18px] font-medium leading-[21.6px]">About Us/Who We Are</Link>
            </li>
            <li className='max-lg:!ml-0 max-lg:mb-[20px]'>
              <Link href="/gallery" className="font-lato text-white-0 max-lg:text-black-7 text-[18px] font-medium leading-[21.6px]">Gallery</Link>
            </li>
            <li className='max-lg:!ml-0 max-lg:mb-[20px]'>
              <Link href="/services" className="font-lato text-white-0 max-lg:text-black-7 text-[18px] font-medium leading-[21.6px]">Services/What We Do</Link>
            </li>
            <li className='max-lg:!ml-0 max-lg:mb-[20px]'>
              <Link href="/our-clients" className="font-lato text-white-0 max-lg:text-black-7 text-[18px] font-medium leading-[21.6px]">Our Clients</Link>
            </li>
            <li className='max-lg:!ml-0 max-lg:mb-[20px]'>
              <Link href="/contact-us" className="font-lato text-white-0 max-lg:text-black-7 text-[18px] font-medium leading-[21.6px]">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
