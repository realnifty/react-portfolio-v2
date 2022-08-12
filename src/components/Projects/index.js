import React from 'react';

function Projects() {

    const projects = [
        { name: "Tweezer", description: "A clone of the social media app Twitter!", repo: "https://github.com/realnifty/tweezer", deployment: "https://tweezer-app.herokuapp.com/", tags: ["Node.js", "GraphQL", "ReactJS"] },
        { name: "Tech Blog", description: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.", repo: "https://github.com/realnifty/tech-blog", deployment: "https://realnifty-tech-blog.herokuapp.com/", tags: ["MySQL", "Handlebars.js", "Node.js", "Bootstrap"] },
        { name: "Habit Tracker", description: "An app that allows users to track their daily habits in a visually simplified display to improve daily motivation, productivity, and overall mental well-being.", repo: "https://github.com/realnifty/habit-tracker", deployment: "https://habitualtracker.herokuapp.com/", tags: ["Node.js", "Sequelize", "Express.js"] },
        { name: "README Generator", description: "A javascript application that takes user input in the command line to create a professional README file.", repo: "https://github.com/realnifty/09-README-generator", deployment: "https://github.com/realnifty/09-README-generator", tags: ["Node.js", "Generator", "Inquirer"] },
    ]


    return (
        <section className='mx-5 py-16 h-screen' id='projects'>
            <div className='flex items-center'>
                <h1 className="text-white text-xl font-readex mr-3">Projects</h1>
                <div className='h-px w-full bg-stone-400'></div>
            </div>
            <div className='py-5'>
                {projects.map((project) => (
                    <div className='text-white bg-stone-800 mb-5 p-5 flex flex-col justify-between shadow-2xl'>
                        <h1 className='font-readex text-lg'>{project.name}</h1>
                        <p className='text-stone-400'>{project.description}</p>
                        <ul className="flex items-center text-orange-400">
                            {project.tags.map((tag) => (
                                <li className='mr-3'>{tag}</li>
                            ))}
                        </ul>
                        <div className='text-2xl text-stone-400'>
                            <a className='mr-3' href={project.deployment}>
                                <i className="bi bi-window-fullscreen"></i>
                            </a>
                            <a href={project.repo}>
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                ))}
                <a className='block text-lg text-orange-400 text-center' href="">See more of my projects here.</a>
            </div>
        </section>
    )
}

export default Projects;