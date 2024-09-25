

import ServicesWhatWedoSection from '@/components/ServicesWhatWedoSection';
import HeaderBannerSection from '@/components/HeaderBannerSection';
import HomeClientsSection from '@/components/HomeClientsSection';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner, SectionTitleData } from '@/libs/interfaces';
import { Main } from '@/templates/Main';
import SectionTitle from '@/components/elements/SectionTitle';
import ServicesImageAndTextSection from '@/components/ServicesImageAndTextSection';

const Services = ({data}:{data:any}) => {
  const sectionTitleObj: SectionTitleData = {
    SectionTitle: 'Services',
    SectionMainTitle: 'Your Sustainable Solution',
  };
  const headerBannerData: HeaderBanner = {
    title: 'Services / What We Do',
    BgImgURL: '/images/HeaderBanner/home-banner2-bg.jpg',
  };
  return (
    <Main
      meta={
        <Meta
          title=""
          description=""
        />
      }
    >
      <HeaderBannerSection currentHref={data.currentHref} headerBannerData={headerBannerData} isHome={false} hideVisionSection={false}  />
      <div className='max-w-[1440px] text-center flex mx-auto justify-center mt-[120px] mb-[40px]'>
        <SectionTitle sectionTitleData={sectionTitleObj} isWhite={false} isCenter />
      </div>
      <ServicesWhatWedoSection/>
      <ServicesImageAndTextSection/>
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

export default Services;
