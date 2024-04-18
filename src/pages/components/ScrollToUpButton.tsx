import React, { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    // On scroll event, toggle button visibility based on scroll position
    const handleScroll = () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // Function to scroll to the top of the page smoothly
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add event listener for scroll when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            id="to-top-button"
            title="Go To Top"
            className={`fixed z-50  bottom-10 right-10 p-4 border-0 w-10 h-10 rounded-full shadow-md bg-black hover:bg-gray-800  text-white text-lg font-semibold transition-colors duration-300 ${
                !showButton ? 'hidden' : ''
            }`}
            onClick={goToTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
            </svg>
            <span className="sr-only">Go to top</span>
        </button>
        
    );
};

export default ScrollToTopButton;
