import React from 'react'

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
        </section>
    )
}

export default Projects