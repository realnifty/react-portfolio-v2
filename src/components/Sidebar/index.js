import React from "react";

function Sidebar(props) {
    const {showSidebar} = props;

    const sections = [
      { name: "About", link: "#about" },
      { name: "Skills", link: "#skills" },
      { name: "Projects", link: "#projects" },
      { name: "Contact", link: "#contact" },
    ];
    return (
        <>
            <aside className={` ${showSidebar ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-200 top-0 right-0 fixed w-3/5 text-center text-stone-400 bg-stone-800 h-screen font-fig`}>
                <ul className="mt-20 mb-5">
                {sections.map((section) => (
                    <li key={section.name} className="my-3 text-lg">
                    <a href={section.link}>{section.name}</a>
                    </li>
                ))}
                </ul>
                <button className="outline outline-1 outline-orange-400 p-2 rounded-md"><span className="text-orange-400">Resume</span></button>
            </aside>
        </>
    );
}

export default Sidebar;