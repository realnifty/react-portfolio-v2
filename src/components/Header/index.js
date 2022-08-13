import React from 'react';

import resume from "../../assets/docs/Rogelio_Pedraza_2022.pdf"

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
                <li className='mx-3 hover:text-stone-300 ease-in-out duration-100' key={section.name}>
                  <a href={section.link}>{section.name}</a>
                </li>
              ))}
                <a href={resume} target="_blank" className="outline outline-1 outline-orange-400 p-2 rounded-md hover:outline-orange-300 ease-in-out duration-100 text-orange-400">Resume</a>
                </ul>
        </header>
      </>
    );
  }
  
  export default Header;