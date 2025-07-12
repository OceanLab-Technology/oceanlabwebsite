'use client';

import { useState, useEffect } from 'react';
import { GlowEffect } from '@workspace/ui/components/ui/glow-effect';
import Cal from '@calcom/embed-react';

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
}


function CalendarWithGlow() {
    const isLargeScreen = useMediaQuery('(min-width: 950px)');

    if (!isLargeScreen) {
    return (
            <div className="flex justify-center items-center mt-10 px-4" id="Book">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden p-4">
                <GlowEffect
                    className="z-0"
                    colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                    mode="rotate"
                    blur="medium"
                    scale={1.1}
                    duration={6}
                />
                <div className="relative z-10 w-full h-full overflow-auto">
                    <Cal
                        namespace="30min"
                        calLink="vanshdev/30min"
                        style={{
                            height: '600px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '12px',
                            overflow: 'auto',
                        }}
                        config={{ layout: 'month_view' }}
                    />
                </div>
            </div>
        </div>
    );
}
    return (
        <div className="flex justify-center items-center mt-25 px-4 sm:px-6 lg:px-8" id="Book">
            <div className="relative w-full max-w-[1000px] h-[600px] sm:h-[550px] md:h-[530px] rounded-2xl overflow-hidden p-4 sm:p-6 md:p-10">
                <GlowEffect
                    className="z-0"
                    colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                    mode="rotate"
                    blur="medium"
                    scale={1.1}
                    duration={6}
                />
                <div className="relative z-10 w-full h-full overflow-auto">
                    <Cal
                        namespace="30min"
                        calLink="vanshdev/30min"
                        style={{
                            height: '100%',
                            width: '100%',
                            border: 'none',
                            borderRadius: '16px',
                            overflow: 'hidden',
                        }}
                        config={{ layout: 'month_view' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default CalendarWithGlow;
