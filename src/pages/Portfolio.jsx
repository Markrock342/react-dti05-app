import React from 'react';
import Navbar from '../components/Navbar';
import bikes from '../assets/Bikes and beards 1.png';
import learnify from '../assets/Learnify 1.png';
import figma from '../assets/Figma to HTML (Community) 1.png';
import edtech from '../assets/EdTech 1.png';
import githubIcon from '../assets/github.png';

export default function Portfolio() {
  const pc = { color: 'yellow' };
  return (
    <>
      <Navbar pc={pc} />
      <div className="bg-black min-h-screen text-white px-10 py-10">
        <h1 style={{ fontFamily: 'Lora' }} className="text-3xl font-bold mb-10 mx-35">
          Portfolio
        </h1>
        <div className="grid grid-cols-2 grid-rows-4 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {/* 1st row: Image left, Text right */}
          <div className="flex flex-col items-center justify-center">
            <img src={bikes} alt="Bikes and Beards" className="w-80 h-56 object-cover rounded-xl mb-4" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 style={{ fontFamily: 'Lora' }} className="font-bold text-base mb-2">Bikes and Beards</h2>
            <p style={{ fontFamily: 'Lora' }} className="text-sm mb-4 w-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <button style={{ fontFamily: 'Lora' }} className="border border-white py-1 px-6 rounded-3xl text-white text-sm hover:bg-white hover:text-black transition">View</button>
              <img src={githubIcon} alt="GitHub" className="w-9 h-9 bg-white rounded-full p-1 animate-pulse hover:scale-110 transition-transform duration-300" />
              <span style={{ fontFamily: 'Lora' }} className="text-xs">Git code</span>
            </div>
          </div>
          {/* 2nd row: Text left, Image right */}
          <div className="flex flex-col justify-center text-right">
            <h2 style={{ fontFamily: 'Lora' }} className="font-bold text-base mb-2">Learnify</h2>
            <p style={{ fontFamily: 'Lora' }} className="text-sm mb-4 w-80 ml-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum.
            </p>
            <div className="flex items-center justify-end gap-4 mt-2">
              <button style={{ fontFamily: 'Lora' }} className="border border-white py-1 px-6 rounded-3xl text-white text-sm hover:bg-white hover:text-black transition">View</button>
              <img src={githubIcon} alt="GitHub" className="w-9 h-9 bg-white rounded-full p-1 animate-pulse hover:scale-110 transition-transform duration-300" />
              <span style={{ fontFamily: 'Lora' }} className="text-xs">Git code</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={learnify} alt="Learnify" className="w-80 h-56 object-cover rounded-xl mb-4" />
          </div>
          {/* 3rd row: Image left, Text right */}
          <div className="flex flex-col items-center justify-center">
            <img src={figma} alt="Figma to HTML (Community)" className="w-80 h-56 object-cover rounded-xl mb-4" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 style={{ fontFamily: 'Lora' }} className="font-bold text-base mb-2">Figma to HTML (Community)</h2>
            <p style={{ fontFamily: 'Lora' }} className="text-sm mb-4 w-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <button style={{ fontFamily: 'Lora' }} className="border border-white py-1 px-6 rounded-3xl text-white text-sm hover:bg-white hover:text-black transition">View</button>
              <img src={githubIcon} alt="GitHub" className="w-9 h-9 bg-white rounded-full p-1 animate-pulse hover:scale-110 transition-transform duration-300" />
              <span style={{ fontFamily: 'Lora' }} className="text-xs">Git code</span>
            </div>
          </div>
          {/* 4th row: Text left, Image right */}
          <div className="flex flex-col justify-center text-right">
            <h2 style={{ fontFamily: 'Lora' }} className="font-bold text-base mb-2">EdTech</h2>
            <p style={{ fontFamily: 'Lora' }} className="text-sm mb-4 w-80 ml-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum.
            </p>
            <div className="flex items-center justify-end gap-4 mt-2">
              <button style={{ fontFamily: 'Lora' }} className="border border-white py-1 px-6 rounded-3xl text-white text-sm hover:bg-white hover:text-black transition">View</button>
              <img src={githubIcon} alt="GitHub" className="w-9 h-9 bg-white rounded-full p-1 animate-pulse hover:scale-110 transition-transform duration-300" />
              <span style={{ fontFamily: 'Lora' }} className="text-xs">Git code</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={edtech} alt="EdTech" className="w-80 h-56 object-cover rounded-xl mb-4" />
          </div>
        </div>
      <div className="flex flex-col items-center border-t border-gray-600 pt-4 my-1">
        <p style={{ fontFamily: 'Lora' }} className="text-sm text-gray-500 ml-30">© 2025 YARANAIKA All rights reserved.</p>
      </div>        
      </div>
    </>
  );
}
