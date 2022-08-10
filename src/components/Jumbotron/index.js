import React from "react";


function Jumbotron() {
    return (
        <>
            <section className="m-5 h-screen">
                <div className="">
                    <div>
                        <h1 className="font-fig text-orange-400 text-md">Hey! My name's</h1>
                    </div>
                    <div>
                        <h1 className="font-readex text-white text-3xl">Rogelio Pedraza</h1>
                    </div>
                    <div>
                        <h1 className="font-fig text-orange-400 mb-5">I'm a full stack coder.</h1>
                    </div>
                    <div>
                        <h1 className="font-fig text-stone-400 text-sm">I specialize in both front/back-end software applications, primarily on the web. I'm alway eager to learn new technologies and am currently focused on refining my expertise on the ones I have studied thus far.</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jumbotron;