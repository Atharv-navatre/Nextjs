import React from "react";
import { useRouter } from "next/router";

function Laptop() {
    const titles = ["HP Laptop 15, 13th Gen Intel Core i5-1335U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xᵉ Graphics, FPR, FHD Camera, Metal Body,Backlit KB (Win 11, MSO 2021, Silver, 1.59 kg), hr0001TU",
        "Lenovo ThinkPad E14 Intel Core i5 12th Gen 14 FHD Thin and Light Laptop(8GB RAM / 512GB SSD / Windows 11 Home / MS Office H & S 2021 / FPR / Backlit Keyboard / Black / 1.59 kg 21E3S04X00",
        "Samsung Galaxy Book3 Core i7 13th Gen 1355U - (16 GB/512 GB SSD/Windows 11 Home) Galaxy Book3 Thin and Light Laptop (15.6 Inch, Graphite, 1.58 Kg, with MS Office)",
        "ASUS Vivobook Pro 15, AMD Ryzen 7 5800H, 15.6(39.6 cm) HD, Thin & Light Laptop(16GB / 512GB SSD / 4GB NVIDIA GeForce RTX 3050 / Windows 11 / Office 2021 / Backlit / Fingerprint / Blue / 1.80 kg), M6500QC - HN741WS",
        "ASUS TUF Gaming F15, 15.6(39.62 cms) FHD 144Hz, Intel Core i7 - 11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, Gaming Laptop(16GB / 1TB SSD / Win 11 / MSO / 90WHrs Battery / Black / 2.30 Kg), FX506HE - HN385WS",
        "ASUS ROG Flow X13 (2022), 13.4(34.03 cm) FHD + 16: 10, 120Hz Touch, AMD Ryzen 9 6900HS, 4GB RTX 3050 Graphics, 2 -in -1 Gaming Laptop(16GB / 512GB SSD / Win 11 / Office 2021 / Black / 1.3 Kg), GV301RC - LJ132WS",
        "HP Victus AMD Ryzen 7-5800H 15.6 inch(39.6 cm) FHD Gaming Laptop (16GB RAM/512GB SSD/RTX 3050 4GB Graphics/144Hz/9ms Response Time/Win 11/MSO/Backlit KB/B&O Audio/Xbox Pass(30 Day)),15-fb0053AX",
        "Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD/Windows 11 Home/Wi-Fi 6),15.6(39.6cms) FHD ANV15 - 51",
        "HP Pavilion 14, 12th Gen Intel Core i5-1235U, 14-inch (35.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe graphics, FPR, Backlit KB, Audio by B&O (Win 11, MSO 2021, Silver, 1.41 kg), dv2014TU",
        "MSI Stealth 16 Mercedes-AMG, Intel 13th Gen. i9-13900H, 41CM UHD+ 60Hz OLED Gaming Laptop (32GB/1TB NVMe SSD/Windows 11 Pro/NVIDIA GeForce RTX 4060, GDDR6 8GB/Selenite Gray/1.88Kg), A13VF-265IN",
        "Microsoft New Surface Pro9 13 Intel evo 12 Gen i5 / 8GB / 256GB Forest with Windows 11 Home, 365 Family 30 - Day Trial & Xbox Game Pass Ultimate 30 - Day Trial, Bluetooth",
        "HP OMEN Gaming Laptop, AMD Ryzen 7 6800H, 8GB RTX 3070Ti GPU, 16.1-inch (40.9 cm), QHD, IPS, 165Hz, 16GB DDR5, 1TB SSD, 300 nits, RGB Backlit KB, B&O, Dual Speakers (MSO, Silver, 2.37 kg), n0123AX",
        "Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Space Grey",
        "Dell Inspiron 7430 14 FHD + (1920x1200) IPS Touch 2 -in -1 Laptop | Intel i7 - 1355U 10 - Core | Iris Xe Graphics | Backlit Keyboard | Fingerprint | Thunderbolt 4 | WiFi 6E | 16GB LPDDR5 1TB SSD | Win10",
        "Lenovo IdeaPad Gaming 3 AMD Ryzen 5 5500H 15.6 (39.62cm) FHD IPS 300nits 144Hz Gaming Laptop (8GB/512GB SSD/Windows 11/NVIDIA RTX 2050 4GB/Alexa/3 Month Game Pass/Onyx Grey/2.32Kg), 82K20289IN",

    ];

    const prices: any = ["61,990", "67,990", "89,990", "70,990", "74,990", "84,990", "69,700", "78,979", "61,990", "2,19,990", "1,08,990", "1,12,990", "1,02,900", "1,04,990","49,690","1,04,190"];
    const images: any = [
        "/assets/cateorgyWisePhoto/laptop/l1.png",
        "/assets/cateorgyWisePhoto/laptop/l2.png",
        "/assets/cateorgyWisePhoto/laptop/l3.png",
        "/assets/cateorgyWisePhoto/laptop/l4.png",
        "/assets/cateorgyWisePhoto/laptop/l5.png",
        "/assets/cateorgyWisePhoto/laptop/l6.png",
        "/assets/cateorgyWisePhoto/laptop/l7.png",
        "/assets/cateorgyWisePhoto/laptop/l8.png",
        "/assets/cateorgyWisePhoto/laptop/l9.png",
        "/assets/cateorgyWisePhoto/laptop/l10.png",
        "/assets/cateorgyWisePhoto/laptop/l11.png",
        "/assets/cateorgyWisePhoto/laptop/l12.png",
        "/assets/cateorgyWisePhoto/laptop/l13.png",
        "/assets/cateorgyWisePhoto/laptop/l14.png",
        "/assets/cateorgyWisePhoto/laptop/l15.png",
    ];

    const ratings: any = [
        4.5, 3.2, 4.8, 2.9, 5.0,
        4.1, 3.7, 4.5, 2.8, 4.6,
        3.9, 4.2, 4.7, 3.5
      ];
      

    const router = useRouter();

    const handleDivClick = (title: any, price: any, image: any) => {
        // Navigate to the second page with the title, price, and image query parameters
        router.push(`/components/Category/displayPage?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`);
    };

    return (
      <>
        <div className="flex flex-wrap justify-center m-0 p-0">
          {titles.map((title, index) => (
            <div key={index} style={{ height: '585px', width: "900px", position: 'relative' }} className={`max-w-sm rounded overflow-hidden justify-center shadow-lg m-4 cursor-pointer ${index < 3 ? 'mt-24' : ''}`} onClick={() => handleDivClick(title, prices[index], images[index])}>
              <div style={{height:"270px" , width:"270px"}} className="img ml-12 flex justify-center items-center text-center"> {/* Added text-center */}
                <img src={images[index]} alt="Phone" className="w-full h-full object-cover" /> {/* Apply object-cover to ensure images fit inside */}
              </div>
              <div className="px-4 py-2" >
                <div>
                  <div className="font-bold text-lg mb-1">{title}</div>
                  <p className="text-gray-700 text-base mb-1">Price: {prices[index]}</p>
                  {/* Add the rating div here */}
                  <div className="flex items-center">
                    <svg className="fill-current text-gray-500 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                    <p className="text-gray-700">{ratings[index]}</p>
                  </div>
                </div>
                {/* End of rating div */}
                <div style={{ position: 'absolute', bottom: '1rem', left: '20%', transform: 'translateX(-50%)' }}>
                  <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
   
    }

export default Laptop;
