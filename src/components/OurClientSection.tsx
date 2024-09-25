import OurClientBox from './elements/OurClientBox';
import OurClientsData from '@/libs/data/portfolio-data/our-clients-data';

const OurClientSection = () => {
  const ourclients = OurClientsData;
  return (
    <section>
      <div className='max-w-[1440px] mx-auto'>
      <div className='gallery-layout-wrapper'>
      {ourclients.map((imageData) => (
        <OurClientBox ourclient={imageData}/>
      ))}
    </div>
      </div>
    </section>
  );
};

export default OurClientSection;
