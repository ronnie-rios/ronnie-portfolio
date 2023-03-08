import React from 'react'
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import { skills } from "../data";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Technologies I am proficient in.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill)=> (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div> 
                    ))}
                </div>                    
            </div>
            <p className='text-center sm:text-4xl text-1xl font-medium title-font text-white mb-4 '>View a copy of my resumé 
            <span className=" hover:underline">
                <a href={`https://drive.google.com/file/d/1GRIHdTfro-pnJZWp3P3csabLZkfN9san/view?usp=sharing`}
                 target="_blank"
                 rel="noreferrer" 
                 > here.</a>
            </span>
            </p>
        </section>
    )
}

export default Skills
