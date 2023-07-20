import React from "react";

function Skills() {
    const techImages = [
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg"},
        {url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}
    ]
  return (
    <section className="mx-5 py-16 h-screen" id="skills">
      <div className="flex items-center">
        <h1 className="text-white text-xl font-readex mr-3 md:text-4xl">Skills</h1>
        <div className="h-px w-full bg-stone-400"></div>
      </div>
      <div className="text-stone-400 my-5 font-fig md:text-lg">
        <p>
          Here are some of the technologies that I'm currently using.
        </p>
      </div>
      <div className="text-stone-400 my-5 flex justify-center">
            <div className="flex flex-wrap items-center justify-between md:grid md:grid-cols-6 md:gap-2">
                {techImages.map((image) => (
                    <div key={image.url} className="bg-white rounded-full p-3 md:p-5 inline-block my-2 shadow-2xl md:hover:-translate-y-4 md:ease-in-out md:duration-200">
                        <img src={image.url} alt="" className="h-16 md:h-20"/>
                    </div>
                ))}
            </div>  
      </div>
      <div className="text-stone-400 my-5 font-fig md:text-lg">
        <p className="py-2">Other concepts or technologies I am familiar with:</p>
        <ol className="text-orange-400 text-sm md:text-lg">
          <li>Git Bash</li>
          <li>Visual Studio Code</li>
          <li>Agile Development</li>
          <li>Figma</li>
          <li>TDD</li>
          <li>RESTful APIs</li>
          <li>OOP</li>
          <li>MVC/MVVM</li>
          <li>Redux</li>
        </ol>
      </div>
    </section>
  );
}

export default Skills;