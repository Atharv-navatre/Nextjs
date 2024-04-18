import React from 'react';
import Footer from './components/Footer';

const AboutUsPage = () => {



    const teamMembers = [
        {
            name: 'Atharv Pawar',
            role: 'The Leader',
            image: '/assets/images/profileImage.jpg',
            github: 'https://github.com/atharv1296'
        },
        {
            name: 'Pruthviraj Gavhane',
            role: 'Team Member',
            image: '/assets/images/profileImage.jpg',
            github: 'https://github.com/Pruthviraj-Gavhane'
        },
        {
            name: 'Sanket Rajput',
            role: 'Team Member',
            image: '/assets/images/profileImage.jpg',
            github: 'https://github.com/sanket-rajput'

        },
        {
            name: 'Atharv Navatre',
            role: 'Team Member',
            image: '/assets/images/profileImage.jpg',
            github: 'https://github.com/Atharv-navatre'
        }, {
            name: 'Vaibhav Yadav',
            role: 'Team Member',
            image: '/assets/images/profileImage.jpg',
            github: 'https://github.com/vaibhavyadav-18'
        },
        {
            name: 'Rushikesh Yemul',
            role: 'Team Member',
            image: '/assets/images/profileImage.jpg',
            github: 'https://github.com/janesmith'
        },
        // Add more team members...
    ];
    return (
        <>


            <div className="container mt-16 py-12 px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us:</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Welcome to PriceTraker, your premier destination for effortlessly finding the best prices on your favorite products across various e-commerce platforms. We understand the importance of saving time and money while shopping online, which is why we've developed a user-friendly tool to help you make informed purchasing decisions.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        At PriceTraker, we're dedicated to simplifying the shopping experience for consumers like you. Whether you're searching for electronics, fashion items, home goods, or anything in between, our platform is designed to provide you with real-time pricing information from leading e-commerce websites.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Our team of experts has curated a database of products and prices from a wide range of online retailers. Using advanced algorithms and data analysis techniques, we compare prices across multiple platforms to ensure that you get the best deal possible. Whether it's Amazon, eBay, Walmart, or any other major online marketplace, we've got you covered.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Why Choose PriceTraker?</h2>
                    <ol className="list-decimal text-lg text-gray-700 mb-6">
                        <li>Seamless Price Comparison: Simply input the link or name of the product you're interested in, and we'll show you where it's available at the best price.</li>
                        <li>Instant Results: Our platform delivers fast and accurate results, saving you the hassle of manually comparing prices across different websites.</li>
                        <li>Transparent and Unbiased: We pride ourselves on providing transparent and unbiased information, so you can trust the results you receive.</li>
                        <li>User-Friendly Interface: Our intuitive interface makes it easy for users of all levels to navigate and find the information they need.</li>
                        <li>Save Time and Money: By leveraging our platform, you can save both time and money by quickly identifying the most cost-effective option for your desired product.</li>
                    </ol>
                    <p className="text-lg text-gray-700">
                        Whether you're a savvy shopper looking to stretch your budget or someone who simply wants to make sure they're getting the best deal, PriceTraker is here to help. Join us today and take the guesswork out of online shopping. Thank you for choosing PriceTraker as your go-to resource for finding the best prices on the products you love.
                    </p>
                    <h2 className="text-2xl font-semibold m-4">How to Access the Tool:</h2>
                    <ol className="list-decimal text-lg text-gray-700 mb-8">
                        <li>Visit Our Website: Go to [YourWebsite.com].</li>
                        <li>Input Product Information: Enter the link or name of the product you want to compare.</li>
                        <li>Click "Submit": Hit the submit button to see the comparison results instantly.</li>
                    </ol>
                    <p className="text-lg text-gray-700">
                        That's it! With just three simple steps, you can access our Product Price Comparison Tool and find the best deals across various e-commerce platforms.
                    </p>



                </div>
            </div>


            <div className='p-5 m-6'>

                <div className="text-center mb-16">
                    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                        THE TEAM
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                        Meet Our <span className="text-yellow-400">Team</span>
                    </h3>
                </div>

                <div className="grid grid-cols-6 gap-6 ">
                    {/* Render team member cards */}
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md  hover:shadow-xl transition duration-300">
                            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-center mb-2">{member.name}</h3>
                            <p className="text-sm text-gray-700 text-center mb-2">{member.role}</p>
                            <div className="flex justify-center">
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12 0a12 12 0 00-3.8 23.39c.6.12.82-.26.82-.58l-.01-2.04c-3.338.72-4.042-1.61-4.042-1.61-.546-1.389-1.333-1.76-1.333-1.76-1.087-.742.083-.728.083-.728 1.205.086 1.84 1.235 1.84 1.235 1.07 1.832 2.807 1.304 3.492.996.108-.776.42-1.304.762-1.604-2.664-.297-5.466-1.332-5.466-5.93 0-1.31.468-2.383 1.235-3.224-.126-.3-.54-1.524.12-3.176 0 0 1.008-.322 3.3 1.232.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.554 3.288-1.232 3.288-1.232.66 1.652.246 2.876.12 3.176.765.84 1.236 1.913 1.236 3.224 0 4.61-2.808 5.628-5.475 5.92.42.372.82 1.103.82 2.224l-.01 3.303c0 .32.22.69.832.57A12 12 0 0012 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <Footer/>
        </>
    );
}

export default AboutUsPage;
