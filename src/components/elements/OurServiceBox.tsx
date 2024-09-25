// eslint-disable-next-line import/no-extraneous-dependencies
import Image from 'next/image';
import { OurClientItem } from '@/libs/interfaces';
import parse from 'html-react-parser';

const OurServiceBox = ({ourservice, key} : {ourservice:OurClientItem, key:number}) => {
  return (
    <div key={key} className='mx-[15px] mb-[60px] our-service-box cursor-pointer group transition-all duration-300 ease-linear'>
      <div className='bg-white-0 group-hover:bg-blue-2 rounded-[10px] overflow-hidden shadow-processEngineering h-full p-[35px] border-b-[5px] border-blue-2 border-solid transition-all duration-300 ease-linear'>
      <div
        className="overflow-hidden relative mb-[25px]"
      >
        <Image
          className="h-[60px] object-cover group-hover:hidden"
          src={ourservice.src}
          alt={ourservice.alt}
          width={60}
          height={60}
        />
        <Image
          className="h-[60px] object-cover hidden group-hover:inline-block"
          src={ourservice.hoverSrc ? ourservice.hoverSrc : ''}
          alt={ourservice.alt}
          width={60}
          height={60}
        />
      </div>
      <div className=''>
        <h3 className='text-blue-2 transition-all duration-300 ease-linear group-hover:text-white-0 text-[28px] font-medium font-lora leading-[36px] mb-[30px]'>{ourservice.title}</h3>
        <div className='font-lato transition-all duration-300 ease-linear font-[18px] leading-[28px] group-hover:text-white-0'>
          {parse(ourservice.desc)}
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurServiceBox;
