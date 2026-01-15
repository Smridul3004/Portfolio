import { useEffect, useRef, useState } from 'react'

const useTimelineScroll = () => {
    const timelineRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [visibleCards, setVisibleCards] = useState([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const timeline = timelineRef.current;
            const rect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const timelineTop = rect.top;
            const timelineHeight = rect.height;

            let progress = 0;
            if (timelineTop < windowHeight * 0.8) {
                progress = Math.min(
                    100,
                    Math.max(0, ((windowHeight * 0.8 - timelineTop) / (timelineHeight + windowHeight * 0.3)) * 100)
                );
            }
            setScrollProgress(progress);

            const newVisibleCards = [];
            cardRefs.current.forEach((ref, index) => {
                if (ref) {
                    const cardRect = ref.getBoundingClientRect();
                    if (cardRect.top < windowHeight * 0.85) {
                        newVisibleCards.push(index);
                    }
                }
            });
            setVisibleCards(newVisibleCards);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return {
        timelineRef,
        scrollProgress,
        visibleCards,
        cardRefs
    };
};

export default useTimelineScroll;
