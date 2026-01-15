import React from 'react'

const TimelineLine = ({ scrollProgress, isMobile = false }) => {
    const positionClass = isMobile
        ? 'absolute left-4 top-0 bottom-0 w-[2px] bg-slate-200 md:hidden'
        : 'absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 hidden md:block';

    const dotSize = isMobile ? 'w-2.5 h-2.5 ring-3' : 'w-3 h-3 ring-4';

    return (
        <div className={positionClass}>
            {/* Progress fill */}
            <div
                className='w-full bg-gradient-to-b from-slate-700 via-slate-600 to-slate-500 transition-all duration-500 ease-out'
                style={{ height: `${scrollProgress}%` }}
            />
            {/* Loader indicator */}
            <div
                className='absolute left-1/2 transition-all duration-500 ease-out z-20'
                style={{
                    top: `${scrollProgress}%`,
                    transform: `translateX(-50%) translateY(-50%)`,
                    opacity: scrollProgress > 0 && scrollProgress < 100 ? 1 : 0
                }}
            >
                <div className={`${dotSize} bg-slate-700 rounded-full ring-white shadow-sm`} />
            </div>
        </div>
    );
};

export default TimelineLine;
