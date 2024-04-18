import React from "react";
import { useRouter } from "next/router";

function Phone() {
  const titles = [
    "Fire-Boltt Visionary 1.78 AMOLED Bluetooth Calling Smartwatch with 368 * 448 Pixel Resolution, Rotating Crown & 60Hz Refresh Rate 100+ Sports Mode, TWS Connection, Voice Assistance (Black)",
    "Casio Vintage Digital Stainless Steel Grey Dial Silver Band Unisex Watch A-158WA-1Q ( D011 )",
    "Shocknshop Analog Digital Sports Multi Functional Dual Time Black Dial Watch for Mens Boys -SK04",
    "boAt Ultima Connect Max with 2.0 HD Display, BT Calling and 100+ Sports Modes Smartwatch  (Active Black Strap, Free Size)",
    "boAt Enigma Switch Smart Watch with Switchable Case, 1.39 HD Display & Ultra Premium Metal Body Design & Functional Crown, 100+ Sports Mode,Multiple Watch Faces,HR & SpO2(Steel Silver)",
    "pTron Reflect Callz 1.85 Square Dial Smartwatch with Bluetooth Calling, Full Touch Display, 600 NITS, Digital Crown, Metal Strap, 100+ Watch Faces, HR, IP68 & 5 Days Battery Life (Royal Gold)",
    "Fastrack Limitless Fs2 with 1.91 Super Ultravu Display|Bt Calling|Advanced ATS Chipset|Functional Crown|320X385 Pixel Resolution|100+ Sports Mode & Watchfaces|Calculator|Ip68 Smartwatch, Black",
    "Fastrack FS1 Pro Smartwatch|1.96 Super AMOLED Arched Display with High Resolution of 410X502|Singlesync BT Calling|Nitrofast Charging|110+ Sports Modes|200+ Watchfaces",
    "beatXP Flux 1.45 (3.6 cm) Ultra HD Display Bluetooth Calling Smart Watch, 415 * 415px, 60Hz Refresh Rate, Rotary Crown, 500 Nits, Health Tracking, 100+ Sports Modes (Black)",
    "Fire-Boltt Quantum Luxury Stainless Steel Design 1.28 Bluetooth Calling Smartwatch with High Resolution of 240 * 240 Px & TWS Connection, SpO2 Tracking with 100 Sports Modes (Sapphire Gold)",
    "Samsung Galaxy Fit3 (Gray), 40mm AMOLED Display with Aluminium Body, Comprehensive Fitness and Health Tracking, Upto 13-Day Battery with Fast Charging, 5ATM & IP68 Rating",
    "Casio G-Shock Men Black Dial Analog-Digital GA-2100RC-1ADR (G1388)",
    "SAMSUNG Watch 4 Classic LTE 46mm Super AMOLED LTE Calling with Body Composition Tracking  (Black Strap, Free Size)",
    "Vibez by Lifelong Premium Luxury Smartwatch for Women with Metal Strap & HD Display, BT Calling, Multiple Watch Faces, Health Tracker, Sports Modes & Free Silicone Strap Smart Watch (Emerald, Gold)",
    "Fire-Boltt Ninja Call Pro Smart Watch Dual Chip Bluetooth Calling, 1.69 Display, AI Voice Assistance with 100 Sports Modes, with SpO2 & Heart Rate Monitoring"
  ];

  const prices = ["₹8,995", "₹2,499", "₹1,695", "₹449", "₹1,299", "₹3,499", "₹1,199", "₹1,999", "2,699", "₹999", "₹2,999", "₹4,999", "₹14,990", "₹1,999", "₹999"];
  const images = [
    "/assets/cateorgyWisePhoto/watches/2.png",
    "/assets/cateorgyWisePhoto/watches/3.png",
    "/assets/cateorgyWisePhoto/watches/4.png",
    "/assets/cateorgyWisePhoto/watches/5.png",
    "/assets/cateorgyWisePhoto/watches/6.png",
    "/assets/cateorgyWisePhoto/watches/7.png",
    "/assets/cateorgyWisePhoto/watches/8.png",
    "/assets/cateorgyWisePhoto/watches/9.png",
    "/assets/cateorgyWisePhoto/watches/10.png",
    "/assets/cateorgyWisePhoto/watches/11.png",
    "/assets/cateorgyWisePhoto/watches/12.png",
    "/assets/cateorgyWisePhoto/watches/1.png",
    "/assets/cateorgyWisePhoto/watches/13.png",
    "/assets/cateorgyWisePhoto/watches/14.png",
    "/assets/cateorgyWisePhoto/watches/15.png",

  ];

  const ratings: any = [
    4.5, 3.2, 4.8, 2.9, 5.0,
    4.1, 3.7, 4.5, 2.8, 4.6,
    3.9, 4.2, 4.7, 3.5, 4.8
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
          <div key={index} style={{ height: '570px', width: "900px", position: 'relative' }} className={`max-w-sm rounded overflow-hidden justify-center shadow-lg m-4 cursor-pointer ${index < 3 ? 'mt-24' : ''}`} onClick={() => handleDivClick(title, prices[index], images[index])}>
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
              <div style={{ position: 'absolute', bottom: '1rem', left: '21%', transform: 'translateX(-50%)' }}>
                <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  }

export default Phone;
