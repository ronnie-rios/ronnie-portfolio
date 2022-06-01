import React from "react";
import { Link } from 'react-router-dom';
export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            
                <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className='title-font sm:text-4xl text-2xl mb-4 font-medium text-white'>
                        Hello, I'm Ronnie Rios. 
                        <br className="hidden lg:inline-block" /> I'm a full stack web developer.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I'm a former educator and currently an instructor and software developer for Capital One Developer Academy. Whether it be in the front-end or back-end, I'm experienced in problem solving and working collaboratively to make sure 
                    quality work is produced. Dedicated to learning and applying new technologies to ensure maximum functionality.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See some of my work.
                        </a>
                        <Link to='/bio'>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">About Me</button>
                        </Link>
                    </div>
                    
                </div>    
            </div>
        </section>
    );
}