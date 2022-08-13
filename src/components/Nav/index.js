import React, { useState } from "react";

import Hamburger from "hamburger-react";
import Sidebar from "../Sidebar";


function Nav() {
  const sections = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    ];
    const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <header className="flex z-30 justify-between items-center sticky top-0 m-5 md:hidden">
          <h1 className="font-readex text-3xl text-orange-400"><a href="#home">RP</a></h1>
          <Hamburger color="#fb923c" toggled={showSidebar} toggle={setShowSidebar}/>
      </header>
      <div className="flex justify-between">
        <nav className="text-stone-400 hidden">
          <ul>
            {sections.map((section) => (
              <li key={section.name}>
                <a href={section.link}>{section.name}</a>
              </li>
            ))}
          </ul>
          <button>Resume</button>
        </nav>
      </div>
    </>
  );
}

export default Nav;