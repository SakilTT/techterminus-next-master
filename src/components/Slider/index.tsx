import Link from 'next/link';

const Slider = () => {
  return (
    <div>
      <div className="h-auto">
        <div id="slider-1" className="container mx-auto">
          <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-[url(https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80)]">
            <div className="md:w-1/2">
              <p className="text-sm font-bold uppercase">Services</p>
              <p className="text-3xl font-bold">Hello world</p>
              <p className="mb-10 text-2xl leading-none">
                Carousel with TailwindCSS and jQuery
              </p>
              <Link
                href="/"
                className="rounded bg-purple-800 px-8 py-4 text-xs font-bold uppercase hover:bg-gray-200 hover:text-gray-800"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div id="slider-2" className="container mx-auto">
          <div className="bg-cover bg-top  h-auto text-white py-24 px-10 object-fill bg-[url(https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80)]">
            <p className="text-sm font-bold uppercase">Services</p>
            <p className="text-3xl font-bold">Hello world</p>
            <p className="mb-10 text-2xl leading-none">
              Carousel with TailwindCSS and jQuery
            </p>
            <Link
              href="/"
              className="rounded bg-purple-800 px-8 py-4 text-xs font-bold uppercase hover:bg-gray-200 hover:text-gray-800"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-12 justify-between pb-2">
        <button
          id="sButton1"
          type="button"
          className="w-4 rounded-full bg-purple-400 pb-2 "
        >
          Click Here
        </button>
        <button
          id="sButton2"
          type="button"
          className="w-4 rounded-full bg-purple-400 p-2"
        >
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Slider;
