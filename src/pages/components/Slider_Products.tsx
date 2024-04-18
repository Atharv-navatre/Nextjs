import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import '@/styles/globals.css';
import { useRouter } from "next/router";



const Slider_Products = () => {

    const router = useRouter();

    
    const handleDivClick = (title: any) => {
        // Navigate to the second page with the title, price, and image query parameters
        router.push(`/components/Category/displayPage?title=${encodeURIComponent(title)}`);
      };


    const data = [
        {
            "title": "Redmi 12 5G Moonstone Silver 6GB RAM 128GB ROM",
            "image": "/assets/cateorgyWisePhoto/phone/redmi12.png"
        },
        {
            "title": "OPPO A59 5G (Silk Gold, 4GB RAM, 128GB Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger | 6.56 HD+ 90Hz Display",
            "image": "/assets/cateorgyWisePhoto/phone/oppoa59.png"
        },
        {
            "title": "Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage) | MTK Dimensity 6080 5G | 7.6mm, Slimmest Note Ever",
            "image": "/assets/cateorgyWisePhoto/phone/redminote13.png"
        },
        {
            "title": "OnePlus 12R (Iron Gray, 8GB RAM, 128GB Storage)",
            "image": "/assets/cateorgyWisePhoto/phone/oneplus12r.png"
        },
        {
            "title": "Vivo V29 5G ((Red, 128 GB) (8 GB RAM))",
            "image": "/assets/cateorgyWisePhoto/phone/vivov29.png"
        },
        {
            "title": "Apple iPhone 15 Pro Max (256 GB) - Black Titanium",
            "image": "/assets/cateorgyWisePhoto/phone/iphone15promax.png"
        },
        {
            "title": "Samsung Galaxy A73 5G Awesome Gray, 8GB RAM, 128GB Storage",
            "image": "/assets/cateorgyWisePhoto/phone/samsunga73.png"
        },
        {
            "title": "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage)",
            "image": "/assets/cateorgyWisePhoto/phone/samsungs24.png"
        },
        {
            "title": "Google Pixel 7 (Obsidian, 128 GB)  (8 GB RAM)",
            "image": "/assets/cateorgyWisePhoto/phone/pixel7.png"
        },
        {
            "title": "realme 12 Pro 5G (Submarine Blue, 8GB RAM 256 GB Storage)",
            "image": "/assets/cateorgyWisePhoto/phone/realme12pro.png"
        },
        {
            "title": "Honor 90 5G (Emerald Green, 256 GB)  (8 GB RAM)",
            "image": "/assets/cateorgyWisePhoto/phone/honor90.png"
        },
        {
            "title": "vivo X100 (Stargaze Blue, 256 GB)  (12 GB RAM)",
            "image": "/assets/cateorgyWisePhoto/phone/vivox100.png"
        },
        {
            "title": "Redmi Note 13 Pro+ (Fusion White, 12GB RAM, 256GB Storage)",
            "image": "/assets/cateorgyWisePhoto/phone/redmi13pro+.png"
        },
        {
            "title": "Apple iPhone 15 (128 GB) - Blue",
            "image": "/assets/cateorgyWisePhoto/phone/iphone15.png"
        },
        {
            "title": "iQOO 12 5G (Legend, 12GB RAM, 256GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera",
            "image": "/assets/cateorgyWisePhoto/phone/iqoo12.png"
        },
        {
            "title": "Oppo Reno 11 5G (Wave Green,128 GB) (8 GB RAM)",
            "image": "/assets/cateorgyWisePhoto/phone/opporeno11.png"
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true, // Enable autoplay
        // autoplaySpeed: 50,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    
  return (
    
    <div className='w-4/5 m-auto p-2 '>
    <h2 id="qualities" className="text-4xl font-bold text-white text-center p-4">Trending Now</h2>

        <div className='m-2 p-2'>
        <Slider {...settings}>
  {data.map((d, index) => (
    <div key={index} className='bg-yellow-400 h-[370px] text-black rounded-xl border-4 border-slate-700'>
      <div className='rounded-t-xl h-60 bg-white flex justify-center items-center'>
        <img src={d.image} alt={d.title} className='h-52 rounded-xl' />
      </div>
      <div className='flex flex-col justify-center items-center gap-4 p-4 pb-0'>
        <p className='text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-[300px]'>{d.title}</p>
        <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 " 
onClick={() => handleDivClick(d.title)}>Check Offer</button>
      </div>
    </div>
  ))}
</Slider>


        </div>

    </div>
  )
}

export default Slider_Products;
