import React from "react";

function Skills() {
  return (
    <section className="mx-5 py-10 h-screen" id="skills">
      <div className="flex items-center">
        <h1 className="text-white text-xl font-readex mr-3">Skills</h1>
        <div className="h-px w-full bg-stone-400"></div>
      </div>
      <div className="text-stone-400 my-5">
        <p>
          Here are all the technologies that I'm currently using.
        </p>
      </div>
      <div className="text-stone-400 my-5 flex">
            <div className="flex flex-wrap items-center justify-between">    
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
                </div>
                <div className="bg-white rounded-full p-3 inline-block my-2 ">
                    <img className="h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </div>
            </div>
      </div>
    </section>
  );
}

export default Skills;