import React from 'react';

function Projects() {
	const projects = [
		{
			id: '1',
			name: 'Linkify',
			description:
				'Linkify is an online platform that allows users to create a personalized profile where they can easily share all of their relevant links with others.',
			repo: 'https://github.com/realnifty/links-in-bio',
			deployment: 'https://www.linkify.mobi',
			tags: ['Node.js', 'GraphQL', 'ReactJS'],
		},
		{
			id: '2',
			name: 'Tech Blog',
			description:
				'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
			repo: 'https://github.com/realnifty/tech-blog',
			deployment: 'https://realnifty-tech-blog.herokuapp.com/',
			tags: ['MySQL', 'Node.js', 'MVC'],
		},
		{
			id: '3',
			name: 'Deep Thoughts',
			description:
				'A social media application called "Deep Thoughts," where users can create an account, post their thoughts for others to see, and interact with other users through these thoughts.',
			repo: 'https://github.com/realnifty/deep-thoughts',
			deployment: 'https://nifty-deep-thoughts.herokuapp.com/',
			tags: ['Express.js', 'ReactsJS', 'GraphQL'],
		},
		{
			id: '4',
			name: 'README Generator',
			description:
				'A javascript application that takes user input in the command line to create a professional README file.',
			repo: 'https://github.com/realnifty/09-README-generator',
			deployment: 'https://github.com/realnifty/09-README-generator',
			tags: ['Node.js', 'Command Line', 'Inquirer'],
		},
	];

	return (
		<section className='mx-5 py-16 min-h-screen' id='projects'>
			<div className='flex items-center'>
				<h1 className='text-white text-xl font-readex mr-3 md:text-4xl'>
					Projects
				</h1>
				<div className='h-px w-full bg-stone-400'></div>
			</div>
			<p className='text-stone-400 my-5 font-fig md:text-lg'>
				Here are some of my most recent works.
			</p>
			<div className='py-5 flex justify-center flex-wrap'>
				{projects.map((project) => (
					<div
						key={project.id}
						className='text-white bg-stone-800 m-5 p-5 flex flex-col justify-between shadow-2xl w-full md:w-1/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3'
					>
						<h1 className='font-readex text-lg'>{project.name}</h1>
						<p className='font-fig text-stone-400'>{project.description}</p>
						<ul className='font-fig flex flex-wrap items-center text-orange-400'>
							{project.tags.map((tag) => (
								<li key={tag} className='mr-3'>
									{tag}
								</li>
							))}
						</ul>
						<div className='text-2xl text-stone-400'>
							<a
								className='mr-3 hover:text-stone-300 ease-in-out duration-100'
								href={project.deployment}
							>
								<i className='bi bi-window-fullscreen'></i>
							</a>
							<a
								className='hover:text-stone-300 ease-in-out duration-100'
								href={project.repo}
							>
								<i className='bi bi-github'></i>
							</a>
						</div>
					</div>
				))}
			</div>
			<p className='block text-lg text-stone-400 text-center font-fig md:text-center md:text-xl'>
				See more of my projects{' '}
				<a
					className='text-orange-400 hover:text-orange-300 ease-in-out duration-100'
					href='https://github.com/realnifty?tab=repositories'
				>
					here.
				</a>
			</p>
		</section>
	);
}

export default Projects;
