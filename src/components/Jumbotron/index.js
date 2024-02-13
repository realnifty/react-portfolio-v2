import React from 'react';

import me from '../../assets/images/me.jpg';

function Jumbotron() {
	return (
		<>
			<section className='mx-5 py-10 h-screen'>
				<div className=''>
					<div>
						<h1 className='font-fig text-orange-400 text-md md:text-lg'>
							Hey! My name's
						</h1>
					</div>
					<div>
						<h1 className='font-readex text-white text-4xl md:text-6xl my-2'>
							Rogelio Pedraza
						</h1>
					</div>
					<div>
						<h1 className='font-readex text-orange-400 mb-5 text-3xl md:text-5xl'>
							I'm a Full Stack coder.
						</h1>
					</div>
					<div>
						<h1 className='font-fig text-stone-400 md:text-lg md:w-1/2'>
							I specialize in both front/back end software development,
							primarily on the web. I'm always eager to learn new technologies
							and am currently focused on refining my skills in those I've
							learned so far.
						</h1>
					</div>
					<img src={me} alt='picture of rogelio pedraza' className='me my-7'/>
				</div>
			</section>
		</>
	);
}

export default Jumbotron;
