// eslint-disable-next-line import/no-extraneous-dependencies
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import Image from 'next/image';
import { GalleryImagesitem } from '@/libs/interfaces';

const ImageLightGallery = ({visibleImages} : {visibleImages:GalleryImagesitem[]}) => {
  return (
    <LightGallery
          elementClassNames="Gallery-Layout gallery-layout-wrapper max-md6:gap-[1.5rem]"
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgAutoplay]}
        >
      {visibleImages.map((imageData) => (
        <a
        href={imageData.src}
        data-lg-size="900-590"
        data-src={imageData.src}
        key={imageData.id}
      >
        <div
          className="overflow-hidden rounded-[10px]"
          key={imageData.id}
        >
          <Image
            className="h-[300px] object-cover transition-all duration-500 hover:scale-110 hover:brightness-50 hover:ease-in-out"
            src={imageData.src}
            alt={imageData.alt}
            width={900}
            height={590}
          />
        </div>
      </a>
      ))}
    </LightGallery>
  );
};

export default ImageLightGallery;
