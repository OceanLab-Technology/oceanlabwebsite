"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@workspace/ui/lib/utils";

export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  const [hovered, setHovered] = useState(false);
  function onMouseEnter() {
    setHovered(true);
  }

  function onMouseLeave() {
    setHovered(false);
  }


  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        // "w-screen h-screen bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        "w-full h-full bg-transparent flex items-center justify-center relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        // className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
        className="group/card w-full h-full relative overflow-hidden bg-transparent flex items-center justify-center rounded-3xl"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          hovered={hovered}
        />
        {/* <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44  rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div> */}
              <div className="relative z-10 flex items-center justify-center">
        <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
          <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
          <span className="dark:text-white text-black z-20">{text}</span>
        </div>
      </div>

      </div>
    </div>
  );
};

// export function CardPattern({ mouseX, mouseY, randomString, hovered }: any) {
//   let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
//   // let style = { maskImage, WebkitMaskImage: maskImage };
//   let style = hovered
//     ? { maskImage, WebkitMaskImage: maskImage }
//     : {}; // ← No mask if not hovered


//   return (
//     <div className="pointer-events-none">
//       <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
//       <motion.div
//         className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
//         style={style}
//       />
//       <motion.div
//         className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
//         style={style}
//       >
//         <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
//           {randomString}
//         </p>
//       </motion.div>
//     </div>
//   );
// }

export function CardPattern({ mouseX, mouseY, randomString, hovered }: any) {
  const defaultMaskImage = "none"; // You can also use a static radial here if needed
  const dynamicMaskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;

  const style = {
    maskImage: hovered ? dynamicMaskImage : defaultMaskImage,
    WebkitMaskImage: hovered ? dynamicMaskImage : defaultMaskImage,
  };

  return (
    <div className="pointer-events-none">
      {/* Static fading gradient background */}
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50" />

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />

      {/* Text pattern */}
      <motion.div
        className="absolute inset-0 rounded-2xl mix-blend-overlay opacity-100 transition duration-500"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}


const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
