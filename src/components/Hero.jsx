import React from 'react';

const Hero = () => {
  const heroStyles = {
    backgroundImage: 'url("./images/bg-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
  };

  return (
    <div className='relative w-full h-screen' style={heroStyles}>
      <div className='absolute top-0 left-0 w-full h-screen bg-black opacity-60'></div>
      <div className='absolute top-0 left-0 w-full h-screen flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto p-4'>
          <p>Whenever you want</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Consult & Visit
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            praesentium hic deserunt! Quo, sed. Porro incidunt in molestiae
            explicabo dolor.
          </p>
          <button className='bg-yellow-500 text-black py-2 px-6 rounded-md hover:bg-slate-500 hover:text-yellow-500'>
            Get started
          </button>
          <button className='bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-slate-500 hover:text-purple-500'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
