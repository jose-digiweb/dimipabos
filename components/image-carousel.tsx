import ky from 'ky'
import { headers } from 'next/headers'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

/**
 * The ImageCarousel component
 * @description Will render the ImageCarousel
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The ImageCarousel component
 */
export const ImageCarousel = async () => {
  // Get the host from headers
  const headersList = headers()
  const host = (await headersList).get('host') || 'localhost:3000'
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'

  const data = await ky(`${protocol}://${host}/api/images`).json<{
    images: { key: string; url: string }[]
  }>()

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
            className='relative overflow-hidden rounded-md md:basis-1/2 lg:basis-1/3'
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
  )
}
