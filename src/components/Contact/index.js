import React from 'react';

function Contact() {
    return (
        <section className='mx-5 py-16 h-screen' id='contact'>
            <div className='flex items-center'>
                <h1 className="text-white text-xl font-readex mr-3">Contact</h1>
                <div className='h-px w-full bg-stone-400'></div>
            </div>
            <div className='flex flex-col text-center'>
                <h1 className='font-readex text-stone-400 text-4xl mt-5'>Thank you for getting this far!</h1>
                <p className='font-fig text-stone-400 my-5'>
                    I am actively seeking out new employment opportunities in my career field.
                    My inbox is always open. If you have any questions
                    or comments, please feel free to shoot me a message below.
                    I will always reply as soon as possible!
                </p>
                <button className="outline outline-1 outline-orange-400 p-2 rounded-md hover:outline-orange-300 ease-in-out duration-100 text-orange-400 w-1/4 mx-auto">Email</button>
            </div>
        </section>
    )
}

export default Contact;