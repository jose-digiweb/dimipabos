// Dependencies
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';

// Types
type Props = {
  className?: string;
};

/**
 * The ImageCarousel component
 * @description Will render the ImageCarousel
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The ImageCarousel component
 */
export const ImageCarousel = async () => {
  // Get the images from the API and cache them forever
  const res = await fetch('http://localhost:3000/api/images');

  // If the request fails, return null
  if (!res.ok) {
    return null;
  }

  // Parse the response as JSON
  const data = (await res.json()) as {
    images: {
      key: string;
      size: number;
      lastModified: string;
      url: string;
    }[];
  };

  // Render the carousel with the images
  return (
    <Carousel
      opts={{
        align: 'center',
        containScroll: 'keepSnaps',
        axis: 'x',
      }}
      className='relative'
    >
      <CarouselContent className='h-96 gap-4 px-8'>
        {data.images.map((image, index) => (
          <CarouselItem
            key={image.key}
            className='relative md:basis-1/2 lg:basis-1/3 rounded-md overflow-hidden'
          >
            <Image
              fill
              priority={index < 3}
              alt={image.key}
              src={image.url}
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover object-top'
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious variant='default' className='absolute left-4 z-10' />
      <CarouselNext variant='default' className='absolute right-4 z-10' />
    </Carousel>
  );
};
