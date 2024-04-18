import React from 'react';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="relative rounded-lg shadow m-4 drop-shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ 
                backgroundImage: 'url("/assets/footer.png")',
                filter: 'blur(5px) opacity(0.8)' // Adjust the blur and opacity values as needed
            }}></div>
            <div className="relative z-10 w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center  sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/assets/icons/LOGO Rs.png" className="h-8" alt="PriceTracker Logo" />
                        <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-black">PriceTracker</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-extrabold text-black sm:mb-0 dark:text-black drop-shadow-xl">
                        <li>
                            <a href="/about" className="hover:text-yellow-400 me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/privacyPolicy" className="hover:text-yellow-400 me-4 md:me-6">Privacy Policies</a>
                        </li>
                        <li>
                            <a href="/components/Category/phone" className="hover:text-yellow-400 me-4 md:me-6">Phones</a>
                        </li>
                        <li>
                            <a href="/components/Category/laptop" className="hover:text-yellow-400 me-4 md:me-6">Laptops</a>
                        </li>
                    </ul>
                </div>
                
                <div className="flex justify-center mt-2">
                    <a href="https://www.instagram.com/pricetracker_/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-yellow-450 text-xl mx-2" />
                    </a>
                    <a href="https://www.facebook.com/your_facebook_profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-yellow-450 text-xl mx-2" />
                    </a>
                    <a href="https://twitter.com/your_twitter_profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-yellow-450 text-xl mx-2" />
                    </a>
                </div>
                        

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-black lg:my-8 " />
                <span className="block text-sm text-black sm:text-center dark:text-black ">© 2023 <a href="#" className="hover:text-yellow-400 font-extrabold">PriceTraker™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
