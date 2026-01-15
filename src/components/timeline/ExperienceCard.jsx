import React from 'react'

const ExperienceCard = ({ experience, index, isVisible, isLeft }) => {
    return (
        <div
            className={`w-full md:w-[calc(50%-40px)] transition-all duration-700 ease-out
                ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}
                ${isVisible
                    ? 'opacity-100 translate-x-0'
                    : isLeft ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div
                className={`bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-200/60
                    hover:shadow-md hover:border-slate-300/60 transition-all duration-300`}
            >
                {/* Top accent bar */}
                <div
                    className='h-1 w-16 rounded-full mb-4'
                    style={{ backgroundColor: experience.iconBg }}
                />

                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2'>
                    <h3 className='text-slate-900 text-xl font-semibold tracking-tight'>
                        {experience.title}
                    </h3>
                    <span className='text-slate-500 text-sm font-medium whitespace-nowrap'>
                        {experience.date}
                    </span>
                </div>

                <p className='text-slate-700 font-medium text-base mb-4'>
                    {experience.company_name}
                </p>

                <ul className='space-y-2.5'>
                    {experience.points.map((point, pointIndex) => (
                        <li
                            key={`experience-point-${pointIndex}`}
                            className='text-slate-600 font-normal text-sm leading-relaxed flex items-start gap-2.5'
                        >
                            <span className='text-slate-400 mt-1.5 flex-shrink-0'>•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
