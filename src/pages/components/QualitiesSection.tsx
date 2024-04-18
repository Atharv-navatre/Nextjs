import React from 'react';

const QualitiesSection: React.FC = () => {
  return (

    <>
     <h2 id="qualities" className="text-4xl font-bold text-center mt-8 mb-[-5rem]">Our Qualities</h2>


    <section aria-labelledby="qualities" className="relative h-400px mt-16 overflow-hidden flex justify-center items-center">

  <img
    src="./assets/dots.svg"
    alt="dots"
    aria-hidden="true"
    className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-24 xl:left-7"
  />
  <img
    src="./assets/dots.svg"
    alt="dots"
    aria-hidden="true"
    className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-24 xl:right-7"
  />
  <div className="container mx-auto mt-16 max-w-4xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
      <div className="rounded-full border-8 border-amber-400 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
      <h3 className="text-3xl font-bold">Safe</h3>
      <p>Our <b>PriceTraker</b> ensures your safety & privacy <br /> right from the start, offering robust security measures <br /> out-of-the-box.</p>
    </div>
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
      <div className="rounded-full border-8 border-amber-400 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-3xl font-bold">Efficient</h3>
      <p>Find what you need, when you need it: <br /> personalized product searches for ultimate convenience.</p>
    </div>
  </div>
</section>
    


    </>




)}
       
export default QualitiesSection;

    