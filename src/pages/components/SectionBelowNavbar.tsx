import React from 'react';
import Phone from './Category/phone';
import Link from 'next/link';
import { cursorTo } from 'readline';

const SectionBelowNavbar = () => {
  return (
    <div>
      <div>

        <Link href="/components/Category/phone" className=" gap-3 shd m-4 hover:text-yellow-500 ">
          <button >Phones</button>
        </Link>
        <Link href="/components/Category/laptop" className=" shd gap-5 m-4 shd hover:text-yellow-500">
          <button >Laptops </button>
        </Link>
        <Link href="/components/Category/watches" className=" gap-1  m-4 shd  hover:text-yellow-500">
          <button >Watches </button>
        </Link>
        <Link href="/about" className=" gap-1  m-4 shd  hover:text-yellow-500">
          <button >About Us</button>
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#172a45',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '0 10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default SectionBelowNavbar;
