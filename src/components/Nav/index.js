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
      <header className="flex justify-between">
        <div className="flex z-30 justify-between items-center w-full m-5">
            <h1 className="font-readex text-3xl text-orange-400">RP</h1>
            <Hamburger color="#fb923c" toggled={showSidebar} toggle={setShowSidebar}/>
        </div>
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
      </header>
    </>
  );
}

export default Nav;