
import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  return (
    <nav className="bg-purple-950 h-13"> 
      <div className="flex items-center justify-between mx-auto">
        <Link href={"#hero"} className="text-4xl text-white font-semibold ml-9">LOGO</Link>
        <div className="flex space-x-4"> 
          <Link href="/about" className="py-7 text-white sm:text-xl rounded hover:text-pink-600">About Me</Link>
          
          <Link href={"#skills"} className="block py-7 pl-3 pr-6 text-white sm:text-xl rounded hover:text-pink-600">My Skills</Link>
        </div>
        
      </div>
    </nav>
  );
}
