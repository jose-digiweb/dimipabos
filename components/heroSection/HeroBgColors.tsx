/**
 * The HeroBgColors component
 * @description Will render the HeroBgColors
 * @returns {JSX.Element} The HeroBgColors component
 */
export const HeroBgColors = () => {
  return (
    <>
      <div className='absolute -left-12 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-secondary/30 blur-3xl' />
      <div className='absolute -right-12 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl' />
    </>
  );
};
