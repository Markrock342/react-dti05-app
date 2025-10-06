import React from 'react';
import Navbar from '../components/Navbar';
import icon1 from '../assets/1.png';
import icon2 from '../assets/2.png';
import icon3 from '../assets/3.png';

export default function Contact() {
  const cc = { color: 'yellow' };
  return (
    <>
      <Navbar cc={cc}/>
      <div className="bg-black min-h-screen text-white px-37 py-15">
        <h1 style={{ fontFamily: 'Lora' }} className="text-5xl font-bold mb-20">
          Contact
        </h1>
        <div className="flex flex-col items-center mb-16">
          <h2 style={{ fontFamily: 'Lora' }} className="text-3xl font-bold mb-10 ml-26">
            Let’s Connect
          </h2>
          <p className="text-xl font-semibold text-gray-300 ml-26 mb-20">
            Don't be a stranger! Say hello and let's collaborate
          </p>
        </div>
        <div className="flex justify-center items-start gap-10 mt-20">
          {/* Email */}
          <div className="flex flex-col items-center">
            <img src={icon1} alt="email" className="w-24 mb-4" />
            <span className="text-lg text-gray-100">s6752410009@gmail.com</span>
          </div>
          {/* Location */}
          <div className="flex flex-col items-center px-6 border-x border-gray-600 gap-3">
            <img src={icon2} alt="location" className="w-24 mb-4" />
            <span className="text-lg text-gray-100">Thailand, Bangkok</span>
          </div>
          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-5">
            <img src={icon3} alt="linkedin" className="w-24 mb-4" />
            <span className="text-lg text-gray-100">YARANAIKA</span>
          </div>
        </div>
      </div>
    </>
  );
}

