import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import Head from 'next/head';

import Footer from './components/Footer';
import HeroCarouselFull from './components/HeroCarouselFull';
import PriceTrackerAccessSteps from './components/ExeuationSteps';
import HomeAnim from '../../public/assets/home anim.json';
import QualitiesSection from './components/QualitiesSection';
import Slider_Products from './components/Slider_Products';
import ScrollToTopButton from './components/ScrollToUpButton';
import DisplayComponent from './displayProduct/DisplayComponent';
import BgGrid from './components/BgGrid';
import MyComponent from './components/BgGrid';


const Home = () => {


  const id = 2;

  return (
    <>
      <Head>
        <title>Price Tracker</title>
        <meta name="description" content="Track prices effortlessly, save money smartly, with real-time notifications " />
      </Head>

      <BgGrid />

      <section className=" min-h-screen text-white scrollbar-hide bg-gradient-to-b z-100000 flex flex-col from-purple-800 to-purple-300 Poppins " style={{ marginTop: '-108vh' }} >

        <div className='animate_animated   animate_slideInUp z-30 '  >
          {/* style={{ marginTop: '-1060px' }} */}
          <div style={{ paddingTop: '60px' }}>
          </div>
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="drop-shadow-2xl z-10 animate-marquee select-none text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl rad-text-shadow pt-4 md:pt-12 font-display  leading-none sm:text-4xl sm:pt-2 sm:mb-4 md:mb-0">
              Unlock{' '}

              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
                <span className="roboto relative text-white">
                  savings,
                </span>
              </span> shop smarter!
            </h1>
            <p className="text-16xl lg:text-3xl text-lg sm:text-sm  rad-text-shadow  md:pt-12 font-display font-bold italic leading-none xl:text-3xl 2xl:text-4xl text drop-shadow-[2px_2px_var(--tw-shadow-color)] ">
              {/* hello */}
            </p>
            <div className="w-80 h-80 items-center m-[-42px] drop-shadow-2xl">
              <Lottie animationData={HomeAnim} />
            </div>
            <DisplayComponent />

          </div>
        </div>


      </section>


      <section className='min-w-full m-0 pb-20 z-40 text-black mb-0' style={{ height: "400px" }}>
        <PriceTrackerAccessSteps />

      </section>




      <section className='min-w-full bg-slate-700 h-min mt-4 p-0'>
        <Slider_Products />
      </section>


      <section className=" " >
        <QualitiesSection />
      </section>

      <section className="sm:px-6 md:px-8 lg:px-12 xl:px-16 text-white bg-blue">
        <div className='min-w-full p-0 sm:p-6 md:p-8 lg:p-12 '>
          <HeroCarouselFull />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>

      <ScrollToTopButton />

    </>
  );
};

export default Home;
