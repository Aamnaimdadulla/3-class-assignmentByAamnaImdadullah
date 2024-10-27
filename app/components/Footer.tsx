import React from 'react';

export const Footer = () => {
return (
     <footer className="bg-purple-900 text-white py-5">
      <div className="container max-w-screen-lg text-center">
      <p className="text-2xl">{new Date () .getFullYear()}Aamna Imdadullah. All Rights Reserved.</p>


      <div className="flex justify-center space-x-3">
        <a href="https://github.com/AamnaImdadullah" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">GitHub</a>

        <a href="https://linkedin.com/AamnaImdadullah" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Linkedin</a>

        <a href="mailto:AamnaImdadullah@gmail.com"
        className="hover:text-pink-600">Email</a>


      </div>
      </div>

     </footer> 
  );
};


