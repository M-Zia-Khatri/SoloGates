// import useComingSoon from "@/hooks/useComingSoon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// import Ball3D from "./Ball3D";
{/* <div className="absolute top-0 left-0 w-full h-full">
        <Ball3D />
      </div> */}

export default function ComingSoon() {
  const delay = 2;
  const repeatDelay = 2;
  const [offset, setOffset] = useState(0); // how high it floats
  const durationTime = delay * 2;

  // Set offset after mount
  useEffect(() => {
    setOffset((50 * window.innerHeight) / 100);
  }, []);

  const [isFront, setIsFront] = useState(true);
  const [showText, setShowText] = useState(false);

  return (
    <div className="relative w-screen h-screen bg-Bg-Primary flex items-start
     justify-center overflow-hidden text-white">
      <motion.div animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
        transition={{
          delay,
          duration: durationTime,
          repeat: Infinity,
          repeatDelay: repeatDelay,
          ease: "easeInOut",
          times: [0, 0.25, 0.85, 1],
        }}>
        <motion.img className="h-[50vh] z-50" src="/images/logos/LongLogoBlackBG.png"
        />
      </motion.div>

      {/* Floating illusion container */}
      <motion.div
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.9, 1, 1, 0.9],
        }}
        transition={{
          delay,
          duration: durationTime,
          repeat: Infinity,
          repeatDelay: repeatDelay,
          ease: "easeInOut",
          times: [0, 0.25, 0.85, 1],
        }}
        className="absolute flex justify-center items-center bottom-0 w-full h-[60vh]"
      >
        {/* Text (only shows after bg reaches 80%) */}
        <motion.div
          className="h-full flex flex-col items-center justify-center -translate-y-2.5 text-center relative z-50 space-y-10 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 className="text-2xl sm:text-6xl font-medium tracking-[50px]">
            Coming soon
          </motion.h1>
          <motion.h1 className="text-lg sm:text-2xl font-medium tracking-widest">
            We are working on something special for you!
          </motion.h1>

        </motion.div>

        {/* Background glowing sphere */}
        <motion.div
          className="h-full w-[60vh] bg-gradient-to-b from-[rgba(255,255,255,0.5)] from-0% via-Bg-Primary via-30% to-Bg-Primary/50 to-95% rounded-full absolute drop-shadow-lg"
          style={{ zIndex: 2 }}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            delay,
            duration: durationTime,
            repeat: Infinity,
            repeatDelay: repeatDelay,
            ease: "easeInOut",
            times: [0, 0.25, 0.85, 1],
          }}
          onUpdate={(latest) => {
            if (typeof latest.opacity === "number") {
              // when opacity passes 80% of its range
              if (latest.opacity >= 0.8) {
                setShowText(true);
              } else {
                setShowText(false);
              }
            }
          }}
        />

        {/* Floating orb */}
        <motion.div
          id="myDiv"
          className="w-[calc(60vh/2)] h-[calc(60vh/2)] bg-Secondary absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full blur-[50px]"
          animate={{
            y: [0, -offset, -offset, 0],
          }}
          transition={{
            delay,
            duration: durationTime,
            repeat: Infinity,
            repeatDelay: repeatDelay,
            ease: "easeInOut",
            times: [0, 0.25, 0.85, 1],
          }}
          style={{ zIndex: isFront ? 3 : 1 }}
          onUpdate={(latest) => {
            if (typeof latest.y === "number") {
              const y = latest.y;
              const tolerance = 20;

              // when it's near the top → go behind
              if (y <= -offset + tolerance && isFront) {
                setIsFront(false);
              }
              // when it's back near the bottom → come front
              if (y >= -tolerance && !isFront) {
                setIsFront(true);
              }
            }
          }}
        />
      </motion.div>
    </div>
  );
}

// function TimeBox({ label, value }: { label: string; value: number }) {
//   const padded = String(value).padStart(2, "0");
//   return (
//     <div className="flex flex-col items-center rounded-xl border-2 border-[#1f7468] shadow-lg w-[calc(100%/4)] py-2 sm:py-4 ">
//       <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest mb-1">
//         {padded}
//       </div>
//       <div className="text-xm sm:text-sm sm:font-medium text-gray-300 uppercase tracking-wider">
//         {label}
//       </div>
//     </div>
//   );
// }
