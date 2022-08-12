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
        <h1 className="text-white text-xl font-readex mr-3">Skills</h1>
        <div className="h-px w-full bg-stone-400"></div>
      </div>
      <div className="text-stone-400 my-5 font-fig">
        <p>
          Here are some of the technologies that I'm currently using.
        </p>
      </div>
      <div className="text-stone-400 my-5 flex">
            <div className="flex flex-wrap items-center justify-between">
                {techImages.map((image) => (
                    <div key={image.url} className="bg-white rounded-full p-3 inline-block my-2 shadow-2xl">
                        <img src={image.url} alt="" className="h-16"/>
                    </div>
                ))}
            </div>  
      </div>
    </section>
  );
}

export default Skills;