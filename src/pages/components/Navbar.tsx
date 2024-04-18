import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/icons/LOGO Rs.png"
import SectionBelowNavbar from "./SectionBelowNavbar";



const Navbar = () => {
  return (
    <header className="w-full ">
      <nav className="nav fixed z-50 top-0 left-0 right-0  shadow-lg p-4  bg-transparent backdrop-blur-lg">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src={logo}
            width={27}
            height={27}
            alt="Logo"
          />

          {/* nav-logo */}
          <p className=" Poppins text-2xl shd2 font-bold text-white" >
            Price<span className="text-yellow-400 Poppins text-2xl  shd">Tracke</span>
            <span className="text-lg text-yellow-400">₹</span>
          </p>

        </Link>

        {/* Move the "Shop Smarter, Save Bigger!" text below the PriceTracker name */}
        <div className="flex ml-48 shd">
          
          <p className="small-text reveal-text hidden sm:block text-2xl shd2  font-extrabold">
            Search & Save!
          </p>

        </div>
        <div className="flex items-center gap-5">
          
          <SectionBelowNavbar />

        </div>
      </nav>
    </header>
  );
};

export default Navbar;










