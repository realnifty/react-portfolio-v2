import React from 'react';

function About() {
    return (
        <section className='mx-5 py-16 h-screen' id='about'>
            <div className='flex items-center'>
                <h1 className="text-white text-xl font-readex mr-3 md:text-4xl">About</h1>
                <div className='h-px w-full bg-stone-400'></div>
            </div>
            <div className='text-stone-400 my-5 font-fig md:text-lg'>
                <p>Hello! My name is Rogelio and I like creating web applications.
                    I've always been interested in coding, even when I didn't know much about it.
                    I had always struggled to find a career I could genuinely be interested in and also be proficient at.
                    Being the most tech savvy person in my family, it seems as though this path was always hidden in plain sight.
                    </p>
            </div>
            <div className="text-stone-400 my-5 font-fig md:text-lg">
                <p>Although I only started to learn coding seriously in February of 2022, I can remember writing
                    my first lines of HTML and CSS a few years back when I used to run an ebay store.
                    I'd import custom web fonts and write styled &lt;h1&gt; and &lt;p&gt; tags for item descriptions.
                    Today, I can create <span className='text-white'>MERN</span> stack applications suited for almost any function using the latest technologies.
                </p>
            </div>
        </section>
    )
}

export default About;