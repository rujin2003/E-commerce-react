import Button from './Button';

const Hero = ({ colorDeep, mainText, shadow, mobileShadow, subText, img, height, mobileHeight }) => {
  const isMobile = window.innerWidth <= 767;
  const imgHeight = isMobile ? mobileHeight : height;

  return (
    <main className={`flex lg:flex-row lg:items-center flex-col items-start px-4 z-10 relative overflow-hidden md:px-16`} style={{ height: '700px' }}>
      <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:text-left w-full items-center text-center mb-5 md:mb-0">
        <h1 className='md:text-5xl text-4xl mx-auto lg:mx-0 font-bold leading-tight text-navy'>
          We're about <span style={{ color: `${colorDeep}` }}>{mainText}!</span>
        </h1>
        <p className='leading-normal md:text-2xl text-lg text-navy'>{subText}</p>
        <Button
          type='button'
          text='Get Started'
          className='mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/2 2xl:w-2/5'
          style={{ backgroundColor: `${colorDeep}`, boxShadow: isMobile ? `${mobileShadow}` : `${shadow}` }}
        />
      </div>

      <div className="lg:w-3/5 w-full lg:-mt-6 relative flex justify-center">
        <img src={img} loading="eager" alt={img} style={{ width: '100%', height: imgHeight }} />
      </div>
    </main>
  );
}

export default Hero;
