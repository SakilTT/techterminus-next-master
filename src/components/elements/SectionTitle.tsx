// eslint-disable-next-line import/no-extraneous-dependencies

import type { SectionTitleData } from '@/libs/interfaces';
import parse from 'html-react-parser';

const SectionTitle = ({
  sectionTitleData,
  isWhite,
  isCenter,
}: {
  sectionTitleData: SectionTitleData;
  isWhite: boolean;
  isCenter?: boolean;
}) => {
  return (
    <div
      className={`relative ${!isCenter && 'w-full mb-[50px] max-md2:mb-[30px] flex'} flex-col before:absolute before:bottom-[1px] before:left-[50%] before:h-[2px] before:w-[66px] before:translate-x-[-50%] before:border-b-2 before:border-dotted ${
        isWhite ? 'before:border-b-white-0' : 'before:text-blue-2'
      }`}
    >
      {!isCenter && (
        <>
        <span className={`bg-[url('/images/icons/triangle-pattern.svg')] absolute w-[60px] h-[180px] ${!isCenter ? 'top-[-40px]':'top-[-63px]'} left-[-34px]`}></span>
        </>
      )}
      <div className={`z-10 ${!isCenter ? 'mb-[-10px] mr-[255px] inline-block': 'inline-block relative'}  font-lato font-semibold text-[28px] max-md2:text-[24px] leading-[33.6px] text-blue-2 uppercase`}>
      {isCenter && (
        <>
        <span className={`z-[-1] bg-[url('/images/icons/triangle-pattern.svg')] absolute bg-cover w-[37px] h-[110px] top-[-45px] left-[-27px]`}></span>
        </>
      )}
        <span className='z-10'>{parse(sectionTitleData.SectionTitle)}</span>
      </div>
      {sectionTitleData.SectionMainTitle !== "" && (
        <>
        <h2
        className={`z-10 mt-[31px] font-lora font-semibold text-[36px] max-md2:text-[30px] max-md2:leading-[40px] leading-[46.08px] text-black-7`}
      >
        {parse(sectionTitleData.SectionMainTitle)}
      </h2>
        </>
      )}
    </div>
  );
};

export default SectionTitle;
