import type { HeaderBanner } from '@/libs/interfaces';
import parse from 'html-react-parser';

import Breadcrumbs from './Breadcumbs';
import MissionAndVissonSection from './MissionAndVissonSection';
import Link from 'next/link';

const HeaderBannerSection = ({
  headerBannerData,
  isHome,
  hideVisionSection,
  currentHref,
}: {
  headerBannerData: HeaderBanner,
  isHome: boolean,
  hideVisionSection: boolean,
  currentHref: string,
}) => {
  return (
    <>
    <section
      className="flex h-[734px] flex-col items-center justify-center gap-4 bg-cover bg-leftCenter bg-no-repeat pt-[68px] text-black-0 max-sm:h-[400px]"
      style={{ backgroundImage: `url('${headerBannerData.BgImgURL}')` }}
    >
      <div className='max-w-full w-[1440px] mx-auto px-[15px]'>
        <div className="text-center">
          <h1 className="font-lora text-[58px] leading-[74.24px] max-md2:text-[35px] max-md2:leading-[50px] font-semibold text-center text-white-0 max-lg:text-[42px] max-sm:text-[32px]">
            {parse(headerBannerData.title)}
          </h1>
          <Breadcrumbs currentHref={currentHref} />
          {isHome && (
            <>
            <div className='flex justify-center mt-[53px]'>
            <Link href='/about/' className='flex justify-between items-center group transition-all duration-300 ease-linear'>
              <span className='transition-all duration-300 ease-linear text-blue-2 group-hover:bg-blue-2 group-hover:text-white-0 py-[13px] text-[18px] font-semibold leading-[23px] text-center px-[25px] rounded-[5px] bg-white-0 inline-block'>Learn More</span>
              <span className='p-[18px] group-hover:bg-blue-2 bg-white-0 rounded-[5px] inline-block ml-[20px] transition-all duration-300 ease-linear'>
                <img src="/images/icons/right-arrow.svg" className='w-[14px] h-[14px] group-hover:hidden' alt="" />
                <img src="/images/icons/right-arrow-hover.svg" className='w-[14px] h-[14px] hidden group-hover:block' alt="" />
              </span>
            </Link>
            </div>
            </>
          )}
        </div>
      </div>
    </section>
    {hideVisionSection && (
      <>
<MissionAndVissonSection/>
      </>
    )}
    </>
  );
};

export default HeaderBannerSection;
