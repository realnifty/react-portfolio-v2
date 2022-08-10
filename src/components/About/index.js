import React from 'react';

function About() {
    return (
        <section className='mx-5 py-10 h-screen' id='about'>
            <div className='flex items-center'>
                <h1 className="text-white text-xl font-readex mr-3">About</h1>
                <div className='h-px w-full bg-stone-400'></div>
            </div>
            <div className='text-stone-400 my-5'>
                <p>Hello! My name is Rogelio and I </p>
            </div>
        </section>
    )
}

export default About;