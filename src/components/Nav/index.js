

function Nav() {
    const sections = [
        {name: "About", link: "#about"},
        {name: "Skills", link: "#skills"},
        {name: "Projects", link: "#projects"},
        {name: "Contact", link: "#contact"},
    ];
    return (
        <>
            <nav>
                <h1 className="font-bebas text-orange-600">R.P.</h1>
                <div className="text-stone-400">
                    <ul>
                        {sections.map((section) => (
                            <li><a href={section.link}>{section.name}</a></li>
                        ))}
                    </ul>
                    <button>Resume</button>
                </div>
            </nav>
        </>
    )
}

export default Nav;