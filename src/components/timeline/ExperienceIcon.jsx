import React from 'react'

const ExperienceIcon = ({ experience, index, isVisible, isMobile = false }) => {
    const baseClasses = `rounded-full flex justify-center items-center shadow-sm border-white z-10 transition-all duration-500
        ${isVisible ? 'scale-100' : 'scale-0'}`;

    if (isMobile) {
        return (
            <div
                className={`absolute left-0 w-11 h-11 border-3 md:hidden ${baseClasses}`}
                style={{
                    background: experience.iconBg,
                    transitionDelay: `${index * 150 + 100}ms`
                }}
            >
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[55%] h-[55%] object-contain'
                />
            </div>
        );
    }

    return (
        <div
            className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 border-4 hidden md:flex ${baseClasses}`}
            style={{
                background: experience.iconBg,
                transitionDelay: `${index * 150 + 100}ms`
            }}
        >
            <img
                src={experience.icon}
                alt={experience.company_name}
                className='w-[55%] h-[55%] object-contain'
            />
        </div>
    );
};

export default ExperienceIcon;
