import SectionTitle from '@/components/elements/SectionTitle';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner, SectionTitleData } from '@/libs/interfaces';
import { Main } from '@/templates/Main';

import HeaderBannerSection from '@/components/HeaderBannerSection';
import HomeClientsSection from '@/components/HomeClientsSection';
import OurClientSection from '@/components/OurClientSection';

const sectionTitleObj: SectionTitleData = {
  SectionTitle: 'Our Clients',
  SectionMainTitle: '',
};

const index = ({data}:{data:any}) => {
  const headerBannerData: HeaderBanner = {
    title: 'Our Clients',
    BgImgURL: '/images/HeaderBanner/our-clients.jpg',
  };
  return (
    <Main
      meta={
        <Meta
          title=""
          description="="
        />
      }
    >
      <HeaderBannerSection currentHref={data.currentHref} headerBannerData={headerBannerData} isHome={false} hideVisionSection={false}  />
      <div className='w-[1440px] max-w-full text-center flex mx-auto justify-center mt-[120px] mb-[120px]'>
        <SectionTitle sectionTitleData={sectionTitleObj} isWhite={false} isCenter />
      </div>
      <OurClientSection />
      <HomeClientsSection />
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
