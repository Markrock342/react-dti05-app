import React from 'react';
import Navbar from '../components/Navbar';
import s1 from '../assets/S1.png';

export default function About() {
  const ac = { color: 'yellow' };

  return (
    <>
      <Navbar ac={ac} />

      <div className="relative flex items-start justify-between h-[85vh] px-90 pt-20 bg-black">
        {/* ด้านซ้าย */}
        <div className="flex flex-col items-center text-white space-y-6">
          <h1
            style={{ fontFamily: 'Lora' }}
            className="text-5xl font-bold mb-4"
          >
            About Me
          </h1>

          <div className="mt-4">
            <img
              src={s1}
              alt="S1"
              className="w-40"
            />
          </div>
        </div>

        {/* ด้านขวา */}
        <div className="text-white max-w-md leading-relaxed">
          <h2
            style={{ fontFamily: 'Lora' }}
            className="text-xl font-bold mb-4"
          >
            Hi, I'm Marc. A passionate Front-end Web Developer based in Khmer.
          </h2>

          <p
            style={{ fontFamily: 'Lora' }}
            className="text-lg text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem
            odio labore unde nemo omnis sequi hic sit laudantium repellendus recusandae
            vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit
            nesciunt aperiam odio excepturi repellat libero in enim praesentium! Ex
            dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus
            saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero
            sed! Libero fugit non, placeat nulla quae odio asperiores ratione! Accusantium
            placeat dolorem minus eos excepturi modi.
          </p>
        </div>

        {/* ปุ่ม Download CV */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <button className="border border-white py-2 px-8 rounded-3xl text-white text-lg hover:bg-white hover:text-black transition-all duration-300">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}
