import React from 'react';
import bgImage from '../assets/strawberry-bg.jpg'; // adjust path as needed

const StrawberryBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div 
    className="min-h-screen relative"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default StrawberryBackground;
