// Dependencies
import { cn } from '@/lib/utils';
import Image, { type ImageProps } from 'next/image';

import heroImage from '@/assets/heroSection/hero_image.jpg';

// Types
type Props = {
  image?: ImageProps['src'];
  className?: string;
};

/**
 * The HeroImage component
 * @description Will render the HeroImage
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The HeroImage component
 */
export const HeroImage = ({ image, className }: Props) => {
  return (
    <div className={cn('absolute inset-0 -z-10', className)}>
      <Image
        fill
        priority
        src={image ?? heroImage}
        alt='Voluntários em ação'
        className='h-full w-full object-cover'
      />
      <div className='absolute inset-0 bg-black/80' />
    </div>
  );
};
