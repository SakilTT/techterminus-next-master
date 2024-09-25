import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTopButton = document.getElementById('scroll-top-button');
      if (scrollTopButton && window.scrollY > 600) {
        setShowTop(true);
      } else if (scrollTopButton) {
        setShowTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      id="scroll-top-button"
      className={`fixed left-[40px] z-[999] block h-[45px] w-[42px] rotate-90 ${
        showTop ? 'bottom-[40px] opacity-100' : 'bottom-[-20px] opacity-0'
      } cursor-pointer bg-gray-6 text-center text-white-0 transition-all duration-500 ease-in-out rounded-[5px]`}
      onClick={scrollToTop}
    >
      <span className='flex justify-center text-[17px] h-[17px] font-normal text-white-0' >
        <img className="rotate-180" src="/images/icons/right-arrow-hover.svg" alt="Camburg logo" />
      </span>
    </button>
  );
};

export default ScrollToTopButton;
