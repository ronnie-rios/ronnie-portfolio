import React from 'react'
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Projects I have worked on
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Click the picture to viewed the deploy application. Hover over for more info and the link to the repository.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link} target="_blank"
                            key={project.title}
                            className="sm:w-1/2 w-100 p-4"
                            rel="noreferrer">
                            <div className="flex relative rounded-md">
                              {/* <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                                src={project.image}
                              /> */}
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:opacity-100 rounded-md">
                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                            {project.tech}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                            {project.title}
                        </h1>
                        <p className="leading-relaxed">{project.description}</p>
                        <a href={project.github} className="leading-relaxed font-extrabold hover:text-white px-2">View the repository here.</a>
                        </div>
                    </div>
                    </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
