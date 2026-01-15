import React from 'react'
import { experiences } from '../constants'
import {
    ExperienceCard,
    ExperienceIcon,
    TimelineLine,
    useTimelineScroll
} from './timeline'

const ExperienceTimeline = () => {
    const { timelineRef, scrollProgress, visibleCards, cardRefs } = useTimelineScroll();

    return (
        <div className='mt-12 relative' ref={timelineRef}>
            {/* Timeline lines */}
            <TimelineLine scrollProgress={scrollProgress} />
            <TimelineLine scrollProgress={scrollProgress} isMobile />

            {/* Experience cards */}
            <div className='flex flex-col gap-12 relative'>
                {experiences.map((experience, index) => (
                    <div
                        key={experience.company_name}
                        ref={el => cardRefs.current[index] = el}
                        className='relative flex items-center'
                    >
                        {/* Icons */}
                        <ExperienceIcon
                            experience={experience}
                            index={index}
                            isVisible={visibleCards.includes(index)}
                        />
                        <ExperienceIcon
                            experience={experience}
                            index={index}
                            isVisible={visibleCards.includes(index)}
                            isMobile
                        />

                        {/* Card */}
                        <div className='w-full pl-16 md:pl-0'>
                            <ExperienceCard
                                experience={experience}
                                index={index}
                                isVisible={visibleCards.includes(index)}
                                isLeft={index % 2 === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
