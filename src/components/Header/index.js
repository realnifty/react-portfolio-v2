import React from 'react';

import resume from "../../assets/docs/RAP-24.pdf"

function Header() {
    const sections = [
      { name: "About", link: "#about" },
      { name: "Skills", link: "#skills" },
      { name: "Projects", link: "#projects" },
      { name: "Contact", link: "#contact" },
      ];
    return (
      <>
        <header className="items-center justify-between sticky top-0 m-5 hidden md:flex">
            <h1 className="font-readex text-3xl text-orange-400"><a href="#home">RP</a></h1>
            <ul className='font-fig flex items-center text-stone-400'>
              {sections.map((section) => (
                <li className='mx-3 hover:text-stone-300 ease-in-out duration-100 lg:text-lg' key={section.name}>
                  <a href={section.link}>{section.name}</a>
                </li>
              ))}
                <a href={resume} target="_blank" rel="noreferrer" className="p-2 lg:text-lg rounded-md hover:bg-orange-300 ease-in-out duration-100 text-orange-400 hover:text-stone-800">Resume</a>
                </ul>
        </header>
      </>
    );
  }
  
  export default Header;
