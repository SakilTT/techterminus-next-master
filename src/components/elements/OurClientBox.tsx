// eslint-disable-next-line import/no-extraneous-dependencies
import Image from 'next/image';
import { OurClientItem } from '@/libs/interfaces';
import parse from 'html-react-parser';

const OurClientBox = ({ourclient} : {ourclient:OurClientItem}) => {
  return (
    <div className='px-[15px] pb-[60px] our-client-box'>
      <div className='bg-white-0 rounded-[10px] overflow-hidden shadow-ourClientBox h-full'>
      <div
        className="w-[100%] h-[295px] overflow-hidden xl:w-[350] relative"
      >
        <Image
          className="absolute h-[300px] object-cover transition-all duration-500 hover:scale-110 hover:brightness-50 hover:ease-in-out"
          src={ourclient.src}
          alt={ourclient.alt}
          width={900}
          height={590}
        />
      </div>
      <div className='py-[40px] px-[33px]'>
        <h3 className='text-blue-2 text-[28px] font-medium font-lora leading-[36px]'>{ourclient.title}</h3>
        <div className='font-lato font-[18px] leading-[28px]'>
          {parse(ourclient.desc)}
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurClientBox;
