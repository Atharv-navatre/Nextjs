import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/assets/loading blue.json';
import { MdClose } from 'react-icons/md';
import { useRouter } from "next/router";

interface Data {
  title1: string;
  price1: string;
  image1: string;
  des1: string;
  rating1: string;
  title2: string;
  price2: string;
  image2: string;
  des2: string;
  rating2: string;
  url1: string;
  url2: string;
  savedRuppes: string;
  platform1logo: string;
  platform2logo: string;
  platform1: string;
  platform2: string;
}

function DisplayComponent() {
  const [data, setData] = useState<Data | null>(null);
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [expanded, setExpanded] = useState(false); // State for description expansion
  const router = useRouter();

  const handleBuyNowClick = () => {
    window.open(data?.url1, '_blank');
  };

  const fetchData = async (searchPrompt: string) => {
    try {
      setIsLoading(true);
      setShowLoadingAnimation(true);
      const response = await fetch(`/api/scrapProduct/displayRequest?url=${searchPrompt}`);
      const jsonData = await response.json();
      setData(jsonData.allData);
      setSearchPrompt('');
      setError(null);
      setShowDialog(true); // Display dialog after fetching data
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
      setShowLoadingAnimation(false);
    }
  };

  const handleBuyNowClickFirstPlatform = () => {
    window.open(data?.url1, '_blank');
  };

  const handleBuyNowClickSecondPlatform = () => {
    window.open(data?.url2, '_blank');
  };

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData(searchPrompt);
        }}
        className="flex flex-wrap items-center justify-center drop-shadow-2xl"
        style={{
          marginTop: '20px',
          width: '400px', // Set a specific width
        }}
      >
        {/* Search bar */}
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter Product Name or URL"
          className="searchbar-input focus:outline-none px-4 py-2 inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        />

        <button
          type="submit"
          className="searchbar-btn focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:focus:ring-yellow-900"
          disabled={searchPrompt === ''}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>

        {searchPrompt && (
          <button type="button" name="Search" onClick={() => setSearchPrompt('')} className="ml-2">
            <MdClose size={20} style={{ color: 'black' }} />
          </button>
        )}

        {showLoadingAnimation && (
          <div className="w-40 h-40 m-[-32px]">
            <Lottie animationData={animationData} width={40} height={40} />
          </div>
        )}
      </form>

      {error && <div>Error: {error}</div>}

      {data && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${showDialog ? '' : 'hidden'}`}>
          {/* Dialog backdrop */}
          <div className="absolute bg-black opacity-50 inset-0"></div>
          <div className="bg-white dark:bg-gray-800 mt-20 mb- rounded-lg p-4 max-w-7xl z-50 overflow-hidden flex">
            {/* Product image */}
            <div style={{ marginTop: '40px', marginLeft: '10px', paddingTop: "15px", paddingBottom: "15px", width: '400px', height: '450px', backgroundColor: "white", borderRadius: "5px" }} className="flex-shrink-0 mr-6">
              <img src={data.image1} alt={data.title1} className="w-full h-full object-contain rounded-lg" />
            </div>
            {/* Product details */}
            <div className="w-2/3 p-4 ">
              <div className="flex justify-end">
              <button onClick={() => setShowDialog(false)} className="text-white hover:text-red-500 focus:outline-none">
                  <MdClose size={24} />
                </button>
              </div>
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">{data.title1}</h2>
                </div>

                {/* Platform 1 */}
                <div className="flex" style={{ border: '3px solid white', padding: '10px', marginTop: "5px", justifyContent: "space-around" }}>
                  {/* Platform 1 logo */}
                  <div style={{ height: "90px", width: "130px", alignItems: "center", justifyContent: 'center', display: 'flex' }}>
                    <img src={data.platform1logo} alt={data.platform1} />
                  </div>
                  {/* Price and Rating */}
                  <div className="ml-5" style={{ display: 'flex', alignItems: "center" }}>
                    <p style={{ fontSize: "25px" }} className="text-xl mr-10 font-bold text-gray-900 dark:text-gray-200 ">₹ {data.price1}</p>
                    <p style={{ fontSize: "25px" }} className="text-xl font-bold text-gray-900 dark:text-gray-200">Rating: {data.rating1}</p>
                  </div>
                  {/* Buy Now button */}
                  <div className="ml-5" style={{ height: "70px", alignItems: "center", justifyContent: 'center', display: 'flex' }}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg self-end" onClick={handleBuyNowClickFirstPlatform}>
                      Buy From {data.platform1}
                    </button>
                  </div>
                </div>

                {/* Platform 2 */}
                <div className="flex" style={{ border: '3px solid white', padding: '10px', marginTop: "5px", justifyContent: "space-around" }}>
                  {/* Platform 2 logo */}
                  <div style={{ height: "90px", width: "130px", alignItems: "center", justifyContent: 'center', display: 'flex' }}>
                    <img src={data.platform2logo} alt={data.platform2} />
                  </div>
                  {/* Price and Rating */}
                  <div className="ml-10" style={{ display: 'flex', alignItems: "center" }}>
                    <p style={{ fontSize: "25px" }} className="text-xl mr-10 font-bold text-gray-900 dark:text-gray-200 ">₹ {data.price2}</p>
                    <p style={{ fontSize: "25px" }} className="text-xl font-bold text-gray-900 dark:text-gray-200">Rating: {data.rating2}</p>
                  </div>
                  {/* Buy Now button */}
                  <div className="ml-10" style={{ height: "70px", alignItems: "center", justifyContent: 'center', display: 'flex' }}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg self-end" onClick={handleBuyNowClickSecondPlatform}>
                      Buy From {data.platform2}
                    </button>
                  </div>
                </div>

                {/* Product Description */}
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">Description</h2>
                  <p className={`text-white-200 text-justify dark:text-gray-300 mb-4 ${expanded ? '' : 'truncate'}`}>
                    {data.des1}
                  </p>
                  {/* Read more button */}
                  <button onClick={toggleDescription} className="text-blue-500">{expanded ? 'Read Less' : 'Read More'}</button>
                </div>
              </div>
            </div>
          </div>
        </div >
      )}
    </>
  );
}

export default DisplayComponent;
