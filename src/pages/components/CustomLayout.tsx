import React, { ReactNode } from 'react';
import Footer from './Footer';

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <div style={{marginTop:'700px'}}>
      <Footer/>
      </div>
    </div>
  );
};

export default CustomLayout;
