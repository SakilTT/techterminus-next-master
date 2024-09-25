import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = ({currentHref}:{currentHref:string}) => {
  const router = useRouter();
  const { asPath } = router;

  // Split the current route into individual segments
  const segments = asPath.split('/').filter((segment) => segment !== '');

  // Generate the breadcrumb paths based on the segments
  const paths = segments.map((segment, index) => {
    const urlSegments = segments.slice(0, index + 1);
    const url = `/${urlSegments.join('/')}`;
    return { url, label: segment };
  });

  return (
    <ul className="flex justify-center bg-center text-center font-titillium text-sm font-medium uppercase text-white-0">

     {currentHref !== "/" && (
      <>
      <li>
        <Link
          className="bg-breadCumbLinkPattern bg-[length:0px_2px] bg-[0_88%] bg-no-repeat text-white-0 hover:bg-[length:100%_2px]"
          href="/"
        >
          Home
        </Link>
      </li>
      </>
     )} 
      {paths.map((path, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          {index !== paths.length - 1 ? (
            <Link
              className="relative ml-[10px] pl-6 font-titillium before:absolute before:left-[-2px] before:top-[50%] before:translate-y-[-50%] before:font-josefin before:text-sm before:tracking-[4px] before:text-white-0 before:content-['||']"
              href={path.url}
            >
              <span className="relative bg-breadCumbLinkPattern bg-[length:0px_2px] bg-[0_88%] bg-no-repeat text-white-0 transition-all duration-300 ease-linear hover:bg-[length:100%_2px]">
                {path.label.replace('-', ' ')}
              </span>
            </Link>
          ) : (
            <span className="relative ml-[10px] pl-6 font-titillium before:absolute before:left-[-2px] before:top-[50%] before:translate-y-[-50%] before:font-josefin before:text-sm before:tracking-[4px] before:text-white-0 before:content-['||']">
              {path.label.replace('-', ' ')}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
