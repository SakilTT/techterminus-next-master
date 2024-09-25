import { useEffect, useState } from 'react';

import RenderData from '@/libs/data/portfolio-data/render-data';
import { GalleryImagesitem } from '@/libs/interfaces';
import ImageLightGallery from '@/components/elements/ImageLightGallery';

// Define the type for the category counts object
interface CategoryCounts {
  [key: string]: number;
}

const RendersLayout = () => {
  const [selectedCategory] = useState('All');

  // Filter Image data based on selected category
  const filteredImages =
    selectedCategory === 'All'
      ? RenderData
      : RenderData.filter(
          (imageData) => imageData.category === selectedCategory
        );
  
  // load more
  const itemsPerPage = 9;
  const [visibleImages, setVisibleImages] = useState<GalleryImagesitem[]>(filteredImages.slice(0, itemsPerPage));

  // load more button
  const handleLoadMore = async () => {
    const newImages = filteredImages;
    setVisibleImages(newImages.slice(0, visibleImages.length + itemsPerPage));
  };

  // set visible images for load more
  useEffect(() => {
    setVisibleImages(filteredImages.slice(0, itemsPerPage));
  }, [filteredImages]);
      

  // Calculate the count for each category
  const categoryCounts: CategoryCounts = {};
  RenderData.forEach((item) => {
    if (!categoryCounts[item.category]) {
      categoryCounts[item.category] = 1;
    } else {
      // eslint-disable-next-line no-plusplus
      categoryCounts[item.category]++;
    }
  });

  return (
    <div className="flex flex-col justify-center">
      <div className='w-[1440px] max-w-full mx-auto px-[20px]'>
      <div className='mb-[100px]'>
        <ImageLightGallery visibleImages={visibleImages}/>
        {visibleImages.length !== filteredImages.length && (
          <>
            <div className='mx-auto flex justify-center'>
            <button onClick={handleLoadMore} className='font-lora font-semibold text-blue-2 text-lg text-center border-[1px] rounded-[5px] border-solid py-[14px] px-[25px] border-blue-2 hover:bg-blue-2 hover:text-white-0 transition-all duration-300 ease-linear'>Load More</button>
            {/* <button  className='relative m-[10px] inline-block cursor-pointer whitespace-nowrap border-[2px] border-solid border-orange-0 bg-orange-0 px-[32px] py-[12px] font-josefin font-semibold uppercase leading-5 text-white-0 transition-all duration-300 ease-linear hover:bg-white-0 hover:text-orange-0'></button> */}
            </div>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default RendersLayout;
