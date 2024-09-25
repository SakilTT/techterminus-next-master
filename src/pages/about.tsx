
import AboutImageAndTextSection from '@/components/AboutImageAndTextSection';
import HeaderBannerSection from '@/components/HeaderBannerSection';
import HomeClientsSection from '@/components/HomeClientsSection';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner } from '@/libs/interfaces';
import { Main } from '@/templates/Main';

const About = ({data}:{data:any}) => {
  const headerBannerData: HeaderBanner = {
    title: 'About Us / Who We Are',
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
      <HeaderBannerSection currentHref={data.currentHref} headerBannerData={headerBannerData} isHome={false} hideVisionSection  />
      <AboutImageAndTextSection/>
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

export default About;
