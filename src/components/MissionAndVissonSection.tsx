import React from 'react';

function MissionAndVissonSection() {
  return (
    <>
      <div className="flex items-center justify-center mt-[-100px] pb-[80px] max-md2:pb-[40px]">
        <div className="grid grid-cols-2 max-md6:grid-cols-1 max-md2:grid-cols-1 max-lg:grid-cols-1 w-[1170px]  shadow-missionAndVisoinBox rounded-[5px] bg-white-0">
        <div
    className="bottom-0 top-32 flex flex-col justify-center bg-cover p-2 px-[60px] max-md2:px-[30px] pb-[37px] pt-[50px] max-md2:pt-[30px] max-md2:pb-[25px] text-left leading-8 group hover:text-white-0 text-black-7 hover:bg-blue-2"
>
      <div className="flex items-start text-left h-[68px] top[733px] left-[415px] max-md2:justify-center max-md2:items-center">
      <img alt="Mission" src="/images/icons/mission.svg" className="inline-flex group-hover:hidden" />
      <img alt="Mission" src="/images/icons/mission-hover.svg" className="hidden group-hover:inline-flex" />
      <h5 className="ml-[40px] w-[135px] h-[46px] top-[755px] left-[513px] font-lora font-semibold text-[36px] leading-[46.08px] text-blue-2 group-hover:text-white-0">Mission</h5>
      </div>
      <div>
      <p className="font-lato font-normal text-[18px] leading-[28px] mb-[20px] mt-[40px] text-black-7 group-hover:text-white-0 max-md2:text-center">To evolve as a leading project management solution and trading organization by providing professional top most best quality services.</p>
      </div>
      {/* <a className="flex items-center font-lora text-[16px] font-normal leading-[16px] text-blue-2 group-hover:text-white-0 max-md2:justify-center" href="/">
  Learn More
  <svg className="ml-2 w-4 h-4 text-blue-2 group-hover:text-white-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
</a> */}
</div>
<div
    className="group bottom-0 top-32 flex flex-col justify-center bg-cover px-[60px] max-md2:px-[30px] pb-[37px] pt-[50px] max-md2:pt-[30px] max-md2:pb-[30px] text-left leading-8 hover:text-white-0 text-black-7 hover:bg-blue-2 bg-white-0"
>
      <div className="flex items-start  text-left h-[68px] top[733px] left-[415px] max-md2:justify-center max-md2:items-center">
      <img alt="vision" src="/images/icons/vision.svg" className="inline-flex group-hover:hidden" />
      <img alt="vision" src="/images/icons/vision-hover.svg" className="hidden group-hover:inline-flex" />
      <h5 className="ml-[40px] font-lora font-semibold text-[36px] leading-[46.08px] text-blue-2 group-hover:text-white-0">Vision</h5>
      </div>
      <div>
      <p className="font-lato font-normal text-[18px] leading-[28px] mb-[20px] mt-[40px] group-hover:text-white-0 max-md2:text-center">To be customers preferred and trusted one of the top global bisiness organization in th field for the best project management.</p>
      </div>
      {/* <a className="flex items-center font-lora text-[16px] font-normal leading-[16px] text-blue-2 group-hover:text-white-0 max-md2:justify-center" href="/">
  Learn More
  <svg className="ml-2 w-4 h-4 group-hover:text-white-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
</a> */}

</div>
        </div>
      </div>
    </>
  );
}

export default MissionAndVissonSection;
