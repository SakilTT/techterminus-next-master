
import HeaderBannerSection from '@/components/HeaderBannerSection';
import HomeClientsSection from '@/components/HomeClientsSection';
import ImageAndTextSection from '@/components/ImageAndTextSection';
import OurSpecializationSection from '@/components/OurSpecializationSection';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner } from '@/libs/interfaces';
import { Main } from '@/templates/Main';

const Index = ({data}:{data:any}) => {
  const headerBannerData: HeaderBanner = {
    title: 'A One Stop Effective Solution <br> Organization',
    BgImgURL: '/images/HeaderBanner/home-banner-bg.jpg',
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
      <HeaderBannerSection currentHref={data.currentHref} headerBannerData={headerBannerData} isHome hideVisionSection  />
      <ImageAndTextSection />
      <OurSpecializationSection/>
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

export default Index;
