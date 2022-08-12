import React from "react";

function Sidebar(props) {
    const {showSidebar, setShowSidebar} = props;

    const sections = [
      { name: "About", link: "#about" },
      { name: "Skills", link: "#skills" },
      { name: "Projects", link: "#projects" },
      { name: "Contact", link: "#contact" },
    ];
    return (
        <>
            <div className={`${showSidebar ? 'fixed inset-0 backdrop-blur-sm': 'hidden'}`}></div>
            <aside className={` ${showSidebar ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-200 top-0 right-0 fixed w-3/5 text-center text-stone-400 bg-stone-800 h-screen font-fig z-20`}>
                <ul className="mt-20 mb-5">
                {sections.map((section) => (
                    <li onClick={() => setShowSidebar(!showSidebar)} key={section.name} className="my-3 text-lg hover:text-stone-300 ease-in-out duration-100">
                    <a href={section.link}>{section.name}</a>
                    </li>
                ))}
                </ul>
                <button className="outline outline-1 outline-orange-400 p-2 rounded-md hover:outline-orange-300 ease-in-out duration-100"><a className="text-orange-400">Resume</a></button>
            </aside>
        </>
    );
}

export default Sidebar;