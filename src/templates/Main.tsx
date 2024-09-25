import { type ReactNode } from 'react';

import ScrollToTopButton from '@/components/elements/ScrollToTopButton';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <>
      <Header />
      <div className="w-full pt-[80px] text-gray-700 antialiased">
        {props.meta}

        <div className="mx-auto">
          <main>{props.children}</main>
        </div>
      </div>
      <Footer />
      {/* <Footer /> */}
      <ScrollToTopButton />
    </>
  );
};

export { Main };
