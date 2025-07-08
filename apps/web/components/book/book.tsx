// "use client";
// import { useEffect } from 'react';
// import { getCalApi } from '@calcom/embed-react';
// import { GlowEffect } from '@workspace/ui/components/ui/glow-effect';

// function GlowEffectCardBackground() {
//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ namespace: '30min' });
//       cal('ui', {
//         theme: 'dark',
//         hideEventTypeDetails: false,
//         layout: 'month_view',
//       });
//     })();
//   }, []);

//   return (
//     <div className='relative h-96 w-96'>
//       <GlowEffect
//         colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//         mode='static'
//         blur='medium'
//       />
//       <div className='relative h-96 w-96 rounded-lg bg-black p-4 text-white dark:bg-white dark:text-black flex items-center justify-center'>
//         <button
//           data-cal-namespace='30min'
//           data-cal-link='vanshdev/30min'
//           data-cal-config='{"layout":"month_view","theme":"dark"}'
//           className='px-4 py-2 rounded-md bg-white text-black dark:bg-black dark:text-white border border-gray-300 hover:shadow-lg transition'
//         >
//           Book a 30min Call
//         </button>

//         <svg
//           role='img'
//           xmlns='http://www.w3.org/2000/svg'
//           viewBox='0 0 70 70'
//           aria-label='MP Logo'
//           width='70'
//           height='70'
//           className='absolute bottom-4 right-4 h-8 w-8 text-white dark:text-black'
//           fill='none'
//         >
//           <path
//             stroke='currentColor'
//             strokeLinecap='round'
//             strokeWidth='3'
//             d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default GlowEffectCardBackground;


// 'use client';

// import { GlowEffect } from '@workspace/ui/components/ui/glow-effect'; // adjust path if needed
// import Cal from '@calcom/embed-react';

// function CalendarWithGlow() {
//   return (
//     <div className='justify-center items-center flex mt-30'>
//     <div className="relative w-[1000px] h-[530px] rounded-2xl overflow-hidden p-10">
//       {/* Glow border */}
//       <GlowEffect
//         className="z-0"
//         colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
//         mode="rotate"
//         blur="medium"
//         scale={1.1}
//         duration={6}
//       />

//       {/* Cal iframe */}
//       <div className="relative z-10 w-full h-full">
//         <Cal
//           namespace="30min"
//           calLink="vanshdev/30min"
//           style={{
//             height: '100%',
//             width: '100%',
//             border: 'none',
//             borderRadius: '16px',
//             overflow: 'hidden',
//           }}
//           config={{ layout: 'month_view' }}
//         />
//       </div>
//     </div>
//     </div>
//   );
// }

// 'use client';

// import { useEffect } from 'react';
// import Cal, { getCalApi } from '@calcom/embed-react';
// import { GlowEffect } from '@workspace/ui/components/ui/glow-effect';

// export function GlowEffectCardBackground() {
//     useEffect(() => {
//         (async function () {
//             const cal = await getCalApi({ namespace: '30min' });
//             cal('ui', {
//                 hideEventTypeDetails: false,
//                 layout: 'month_view',
//             });
//         })();
//     }, []);

//     return (
//         <div className="relative inline-block">
//             {/* Outer glow wrapper acts like a border */}
//             <div className="relative p-[4px] rounded-[20px]">
//                 <div className="relative inline-block rounded-[20px] p-[2px]">
//                     {/* Glow as border layer */}
//                     <div className="absolute inset-0 z-0 rounded-[20px] pointer-events-none">
//                         <GlowEffect
//                             colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//                             mode="breathe" // or 'pulse', 'static' for no animation
//                             blur="strong" // Try 'medium' or 'stronger' if too soft
//                             scale={1.05} // Slight outward scale to mimic glow border
//                             className="rounded-[20px]"
//                         />
//                     </div>

//                     {/* Calendar box with dark background and slightly smaller radius */}
//                     <div className="relative z-10 rounded-[16px] overflow-hidden bg-black">
//                         <Cal
//                             namespace="30min"
//                             calLink="vanshdev/30min"
//                             style={{
//                                 height: '600px',
//                                 width: '900px',
//                                 border: 'none',
//                                 borderRadius: '16px',
//                                 overflow: 'hidden',
//                             }}
//                             config={{ layout: 'month_view' }}
//                         />
//                     </div>
//                 </div>

//                 {/* Glow effect sits under the border layer */}
//                 {/* <div className="absolute inset-0 z-0 rounded-[20px]">
//           <GlowEffect
//             colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//             mode="static"
//             blur="stronger"
//             className="rounded-[20px]"
//           />
//         </div>

//         {/* Calendar container */}
//                 <div className="relative z-10 rounded-[16px] overflow-hidden bg-black">
//                     <Cal
//                         namespace="30min"
//                         calLink="vanshdev/30min"
//                         style={{
//                             height: '600px',
//                             width: '900px',
//                             border: 'none',
//                             borderRadius: '16px',
//                             overflow: 'hidden',
//                         }}
//                         config={{ layout: 'month_view' }}
//                     />
//                 </div> */}

//                 {/* Optional logo */}
//                 <svg
//                     role="img"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 70 70"
//                     aria-label="MP Logo"
//                     width="70"
//                     height="70"
//                     className="absolute bottom-4 right-4 h-8 w-8 text-white dark:text-black z-20"
//                     fill="none"
//                 >
//                     <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeWidth="3"
//                         d="M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"
//                     />
//                 </svg>
//             </div>
//         </div>
//     );
// }

// "use client";

// import { useEffect } from 'react';
// import Cal, { getCalApi } from '@calcom/embed-react';
// import { GlowEffect } from '@workspace/ui/components/ui/glow-effect';

// function GlowEffectCardBackground() {
//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ namespace: '30min' });
//       cal('ui', {
//         hideEventTypeDetails: false,
//         layout: 'month_view',
//       });
//     })();
//   }, []);

//   return (
//     <div className="relative inline-block">
//       <div className="relative rounded-xl overflow-hidden" style={{ width: 900, height: 600 }}>
//         {/* Glow Effect strictly bound to Cal */}
//         <GlowEffect
//           colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//           mode="static"
//           blur="medium"
//           className="z-0"
//         />
//         <div className="relative z-10">
//           <Cal
//             namespace="30min"
//             calLink="vanshdev/30min"
//             style={{
//               height: '600px',
//               width: '900px',
//               border: 'none',
//               borderRadius: '0.75rem',
//               overflow: 'hidden',
//             }}
//             config={{ layout: 'month_view' }}
//           />
//         </div>
//         <svg
//           role="img"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 70 70"
//           aria-label="MP Logo"
//           width="70"
//           height="70"
//           className="absolute bottom-4 right-4 h-8 w-8 text-white dark:text-black z-20"
//           fill="none"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeWidth="3"
//             d="M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useEffect } from 'react';
// import Cal, { getCalApi } from '@calcom/embed-react';
// import { GlowEffect } from '@workspace/ui/components/ui/glow-effect';

// export function GlowEffectCardBackground() {
//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ namespace: '30min' });
//       cal('ui', {
//         hideEventTypeDetails: false,
//         layout: 'month_view',
//       });
//     })();
//   }, []);

//   return (
//     <div className="relative inline-block">
//       <GlowEffect
//         colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//         mode="static"
//         blur="medium"
//       />
//       <div className="relative rounded-xl bg-black text-white dark:bg-white dark:text-black overflow-hidden">
//         <Cal
//           namespace="30min"
//           calLink="vanshdev/30min"
//           style={{
//             height: '600px',
//             width: '900px', // Use fixed size Cal requires
//             border: 'none',
//             borderRadius: '0.75rem',
//             overflow: 'hidden',
//           }}
//           config={{ layout: 'month_view' }}
//         />

//         <svg
//           role="img"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 70 70"
//           aria-label="MP Logo"
//           width="70"
//           height="70"
//           className="absolute bottom-4 right-4 h-8 w-8 text-white dark:text-black"
//           fill="none"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeWidth="3"
//             d="M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }


// export function GlowEffectCardBackground() {
//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ namespace: '30min' });
//       cal('ui', {
//         hideEventTypeDetails: false,
//         layout: 'month_view',
//       });
//     })();
//   }, []);

//   return (
//     <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
//       <GlowEffect
//         colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//         mode="static"
//         blur="medium"
//       />
//       <div className="relative w-full rounded-xl bg-black text-white dark:bg-white dark:text-black overflow-visible shadow-lg">
//         <div className="w-full overflow-hidden rounded-xl">
//           <Cal
//             namespace="30min"
//             calLink="vanshdev/30min"
//             style={{
//               height: '600px',
//               width: '100%',
//               border: 'none',
//               borderRadius: '0.75rem',
//               overflow: 'hidden',
//             }}
//             config={{ layout: 'month_view' }}
//           />
//         </div>

//         <svg
//           role="img"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 70 70"
//           aria-label="MP Logo"
//           width="70"
//           height="70"
//           className="absolute bottom-4 right-4 h-8 w-8 text-white dark:text-black"
//           fill="none"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeWidth="3"
//             d="M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

// export function GlowEffectCardBackground() {
//     useEffect(() => {
//         (async function () {
//             const cal = await getCalApi({ namespace: '30min' });
//             cal('ui', {
//                 hideEventTypeDetails: false,
//                 layout: 'month_view',
//             });
//         })();
//     }, []);

//     return (
//         <div className='relative w-full max-w-3xl mx-auto'>
//             <GlowEffect
//                 colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//                 mode='static'
//                 blur='medium'
//             />
//             <div className='relative w-full rounded-xl bg-black text-white dark:bg-white dark:text-black overflow-visible'>
//                 {/* <div className='w-full min-h-[600px]'> */}
//                 {/* <Cal
//                     namespace='30min'
//                     calLink='vanshdev/30min'
//                     style={{
//                         height: '600px',
//                         width: '100%',
//                         border: 'none',
//                         overflow: 'scroll',
//                         borderRadius: '0.75rem',
//                     }}
//                     //   minHeight: '600px',
//                     config={{ layout: 'month_view' }}
//                 /> */}
//                 {/* </div> */}
//                 <div className="w-full max-w-full overflow-hidden rounded-xl">
//                     <Cal
//                         namespace="30min"
//                         calLink="vanshdev/30min"
//                         style={{
//                             height: '600px',
//                             width: '100%',
//                             border: 'none',
//                             borderRadius: '0.75rem',
//                             overflow: 'hidden',
//                         }}
//                         config={{ layout: 'month_view' }}
//                     />
//                 </div>


//                 <svg
//                     role='img'
//                     xmlns='http://www.w3.org/2000/svg'
//                     viewBox='0 0 70 70'
//                     aria-label='MP Logo'
//                     width='70'
//                     height='70'
//                     className='absolute bottom-4 right-4 h-8 w-8 text-white dark:text-black'
//                     fill='none'
//                 >
//                     <path
//                         stroke='currentColor'
//                         strokeLinecap='round'
//                         strokeWidth='3'
//                         d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'
//                     />
//                 </svg>
//             </div>
//         </div>
//     );
// }

// export function GlowEffectCardBackground() {
//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ namespace: '30min' });
//       cal('ui', {
//         hideEventTypeDetails: false,
//         layout: 'month_view',
//       });
//     })();
//   }, []);

//   return (
//     <div className='relative w-full max-w-md h-[500px]'>
//       <GlowEffect
//         colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//         mode='static'
//         blur='medium'
//       />
//       <div className='relative w-full h-full rounded-xl bg-black text-white dark:bg-white dark:text-black overflow-hidden'>
//         <Cal
//           namespace='30min'
//           calLink='vanshdev/30min'
//           style={{
//             width: '100%',
//             height: '100%',
//             border: 'none',
//             borderRadius: '0.75rem',
//           }}
//           config={{ layout: 'month_view' }}
//         />
//         <svg
//           role='img'
//           xmlns='http://www.w3.org/2000/svg'
//           viewBox='0 0 70 70'
//           aria-label='MP Logo'
//           width='70'
//           height='70'
//           className='absolute bottom-4 right-4 h-8 w-8 text-white dark:text-black'
//           fill='none'
//         >
//           <path
//             stroke='currentColor'
//             strokeLinecap='round'
//             strokeWidth='3'
//             d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

// function GlowEffectCardBackground() {
//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ namespace: '30min' });
//       cal('ui', {
//         hideEventTypeDetails: false,
//         layout: 'month_view',
//       });
//     })();
//   }, []);

//   return (
//     <div className='relative h-[32rem] w-[32rem]'>
//       <GlowEffect
//         colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
//         mode='static'
//         blur='medium'
//       />
//       <div className='relative h-full w-full rounded-lg bg-black text-white dark:bg-white dark:text-black overflow-hidden flex items-center justify-center'>
//         <Cal
//           namespace='30min'
//           calLink='vanshdev/30min'
//           style={{
//             width: '100%',
//             height: '100%',
//             overflow: 'scroll',
//             borderRadius: '0.5rem',
//           }}
//           config={{ layout: 'month_view' }}
//         />
//         <svg
//           role='img'
//           xmlns='http://www.w3.org/2000/svg'
//           viewBox='0 0 70 70'
//           aria-label='MP Logo'
//           width='70'
//           height='70'
//           className='absolute bottom-4 right-4 h-8 w-8 text-white dark:text-black'
//           fill='none'
//         >
//           <path
//             stroke='currentColor'
//             strokeLinecap='round'
//             strokeWidth='3'
//             d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { GlowEffect } from '@workspace/ui/components/ui/glow-effect'; // adjust path if needed
// import Cal from '@calcom/embed-react';

// function CalendarWithGlow() {
//   return (
//     <div className="flex justify-center items-center mt-10 px-4 sm:px-6 lg:px-8">
//       <div className="relative w-full max-w-[1000px] h-[600px] sm:h-[550px] md:h-[530px] rounded-2xl overflow-hidden p-4 sm:p-6 md:p-10">
//         {/* Glow border */}
//         <GlowEffect
//           className="z-0"
//           colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
//           mode="rotate"
//           blur="medium"
//           scale={1.1}
//           duration={6}
//         />

//         {/* Cal iframe */}
//         <div className="relative z-10 w-full h-full overflow-auto">
//           <Cal
//             namespace="30min"
//             calLink="vanshdev/30min"
//             style={{
//               height: '100%',
//               width: '100%',
//               border: 'none',
//               borderRadius: '16px',
//               overflow: 'hidden',
//             }}
//             config={{ layout: 'month_view' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default CalendarWithGlow;

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
    const isLargeScreen = useMediaQuery('(min-width: 900px)');

      if (!isLargeScreen) {
    return (
      <div className="flex justify-center items-center mt-10 px-4">
        <div className="w-full max-w-md rounded-xl border p-4 shadow-md overflow-auto relative">
          <GlowEffect
            className="z-0"
            colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
            mode="rotate"
            blur="medium"
            scale={1.1}
            duration={6}
          />
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
    );
  }

    // if (!isLargeScreen) {
    //     return (
    //         <div className="flex justify-center items-center mt-10 px-4">
    //             {/* <div className="w-full max-w-md h-[500px] rounded-xl border p-4 shadow-md"> */}
    //             <div className="w-full max-w-md rounded-xl border p-4 shadow-md overflow-auto">
    //                 <GlowEffect
    //                     className="z-0"
    //                     colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
    //                     mode="rotate"
    //                     blur="medium"
    //                     scale={1.1}
    //                     duration={6}
    //                 />
    //                 <Cal
    //                     namespace="30min"
    //                     calLink="vanshdev/30min"
    //                     style={{
    //                         height: '600px',
    //                         width: '100%',
    //                         border: 'none',
    //                         borderRadius: '12px',
    //                         overflow: 'auto',
    //                     }}
    //                     config={{ layout: 'month_view' }}
    //                 />
    //             </div>
    //         </div>
    //     );
    // }

    // Original design for large screens
    return (
        <div className="flex justify-center items-center mt-10 px-4 sm:px-6 lg:px-8">
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
