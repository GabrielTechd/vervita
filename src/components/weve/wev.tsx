import React from 'react';
import './Wave.css'; // Certifique-se de criar esse arquivo CSS

export default function Wave() {
  return (
    <div className="relative">
      <div className='wave-container flex text-center items-center justify-center mb-6'>
        <div className='wave-bar h-2 w-0.5 bg-white md:h-3'></div>
        <div className='wave-bar h-4 w-0.5 bg-white md:h-6'></div>
        <div className='wave-bar h-6 w-0.5 bg-white md:h-8'></div>
        <div className='wave-bar h-8 w-0.5 bg-white md:h-10'></div>
        <div className='wave-bar h-6 w-0.5 bg-white md:h-8'></div>
        <div className='wave-bar h-4 w-0.5 bg-white md:h-6'></div>
        <div className='wave-bar h-2 w-0.5 bg-white md:h-3'></div>
      </div>
    </div>
  );
}
