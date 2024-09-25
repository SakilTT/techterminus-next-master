import HeaderBannerSection from '@/components/HeaderBannerSection';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner, SectionTitleData } from '@/libs/interfaces';
import { Main } from '@/templates/Main';

import Map from './Map';
import OurOffices from './OurOffices';
import SectionTitle from '@/components/elements/SectionTitle';

const index = ({data}:{data:any}) => {
  const sectionTitleObj: SectionTitleData = {
    SectionTitle: 'Contact Us',
    SectionMainTitle: 'Your Gateway to Success',
  };
  const headerBannerData: HeaderBanner = {
    title: 'Contact Us',
    BgImgURL: '/images/HeaderBanner/contact-us-banner.jpg',
  };
  return (
    <Main
      meta={
        <Meta
          title=''
          description=''
        />
      }
    >
      <HeaderBannerSection currentHref={data.currentHref} headerBannerData={headerBannerData} isHome={false} hideVisionSection={false}  />
      <div className='w-[1440px] max-w-full text-center flex mx-auto justify-center mt-[120px] mb-[50px]'>
      <SectionTitle sectionTitleData={sectionTitleObj} isWhite={false} isCenter />
      </div>
      <OurOffices />
      <Map />
    </Main>
  );
};

export async function getStaticProps() {
  // Fetch data based on the dynamic path
  const data : any = []

  if (typeof window !== 'undefined') {
    const currentHref = window.location.pathname;
    data.currentHref = currentHref;
    }

  return {
    props: {
      data,
    },
  };
}

export default index;
