import React from 'react'
import { projects } from '../constants/index.js'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA.jsx'

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My <span className='blue-gradient_text font-semibold drop-shadow-2xl'>Projects</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>I enjoy building practical, user-focused software that solves real problems.
                    My projects reflect hands-on experience with full-stack development, system design,
                    and integrating modern tools like APIs and AI-driven workflows. I focus on writing
                    clean, scalable code and turning ideas into reliable, working products.
                </p>
            </div>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project, index) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='project icon'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-600'
                                >
                                    Live Link &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    )
}

export default Projects