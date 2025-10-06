import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ hc, ac, pc, cc }) {
  return (
    <>
      <div className="flex justify-around items-center bg-black text-white p-4 py-5">
        <h1 className="text-3xl font-bold hover:scale-110 transition-transform duration-300">YARANAIKA</h1>
        <Link style={hc} to="/"className="text-white py-2 px-6 rounded-3xl hover:bg-white hover:text-black transition-all duration-300" >Home</Link>
        <Link style={ac} to="/about"className="text-white py-2 px-6 rounded-3xl hover:bg-white hover:text-black transition-all duration-300" >About</Link>
        <Link style={pc} to="/portfolio" className="text-white py-2 px-6 rounded-3xl hover:bg-white hover:text-black transition-all duration-300">Portfolio</Link>
        <Link style={cc} to="/contact" className="border border-white py-2 px-6 rounded-3xl animate-bounce hover:bg-white hover:text-black transition-all duration-300">
          Let's Talk
        </Link>
      </div>
    </>
  );
}
