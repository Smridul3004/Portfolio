import React from 'react'
import { skills } from '../constants'
import ExperienceTimeline from '../components/ExperienceTimeline'
import CTA from '../components/CTA'

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello I'm <span className='blue-gradient_text font-semibold drop-shadow-2xl'>Mridul Sharma</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>Software Engineer based in India, specializing in web development and 3D design.</p>
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Skills</h3>

                <div className='mt-16 flex flex-wrap gap-12'>

                    {skills.map((skill, index) => (
                        <div key={index} className='flex flex-col items-center gap-2'>
                            <div className='block-container w-20 h-20'>
                                <div className='btn-back rounded-xl' />
                                <div className='btn-front rounded-xl flex justify-center items-center'
                                >
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className='w-10 h-10'
                                    />
                                </div>
                            </div>
                            <p className='text-sm text-center'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Work Experience.</h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        I've worked with all sorts of companies, leveling up my skills and
                        teaming up with smart people. Here's the rundown:
                    </p>
                </div>

                <ExperienceTimeline />
            </div>

            <hr className='border-slate-200' />

            {/* Todo: Create A CTA to contact me section */}
            <CTA />
        </section>
    )
}

export default About