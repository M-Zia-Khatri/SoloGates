import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useComingSoon from "../../hooks/useComingSoon";
import SocialIcons from "./SocialLinks";
import TimeBox from "./TimeBox";

// Animation constants (centralized)
const delay = 2;
const repeatDelay = 2;
const durationTime = delay * 2;
const cycleTime = (repeatDelay + durationTime) * 1000;
const comingSoonStr = "Coming soon";
const imgUrl: string =
  window.innerWidth >= 640
    ? "/logos/LongLogoBlackBG.png"
    : "/logos/LogoBlackBG-copy.png";
let offsetPercent = 0;
let floatingBollSize = 0;
if (window.innerHeight * 0.5 > window.innerWidth) {
  offsetPercent = 0.4;
  floatingBollSize = window.innerHeight * offsetPercent + 0.1;
} else {
  offsetPercent = 0.5;
  floatingBollSize = window.innerHeight * offsetPercent + 0.1;
}

export default function ComingSoon() {
  const { isComingSoon, countdown } = useComingSoon();
  const [offset, setOffset] = useState(0);
  const [isFront, setIsFront] = useState(true);
  const [showText, setShowText] = useState(false);
  const [stage, setStage] = useState<1 | 2>(1);

  // Compute offset once
  useEffect(() => {
    setOffset(window.innerHeight * (offsetPercent - 0.075));
  }, []);

  // Toggle stages every full animation cycle
  useEffect(() => {
    if (!offset || !isComingSoon) return;
    const timer = setTimeout(() => {
      setStage(2); // move to stage 2
    }, cycleTime);
    return () => clearTimeout(timer);
  }, [offset, isComingSoon]);

  return (
    <div className="bg-Bg-Primary relative flex h-screen w-screen items-start justify-center overflow-hidden p-4 text-white">
      {/* Stage switching content (Logo / Countdown) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          stage === 1
            ? { opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] } // loop for logo
            : { opacity: 1, scale: 1 } // stable for timer
        }
        transition={
          stage === 1
            ? {
                delay,
                duration: durationTime,
                repeat: Infinity,
                repeatDelay,
                ease: "easeInOut",
                times: [0, 0.25, 0.75, 1],
              }
            : { delay, duration: 1, ease: "easeOut" } // only fade-in once
        }
      >
        {stage === 1 ? (
          <>
            {/* img*/}
            <motion.img
              className="z-50 w-[85vw] sm:h-[55vh] sm:w-fit"
              src={imgUrl}
            />
          </>
        ) : (
          <>
            {/* timer */}
            {/* gap-4 p-4 md:gap-6 md:p-6 lg:gap-4 lg:p-4 */}
            <div
              className="grid h-[40vh] w-[40vh] grid-cols-2 grid-rows-2"
              style={{
                padding: "calc(40vh * 0.0625)",
                gap: "calc(40vh * 0.0375)",
              }}
            >
              <TimeBox label="Day" value={countdown?.days ?? 0} />
              <TimeBox label="Hours" value={countdown?.hours ?? 0} />
              <TimeBox label="Minutes" value={countdown?.minutes ?? 0} />
              <TimeBox label="Sec" value={countdown?.seconds ?? 0} />
            </div>

            {!isComingSoon && (
              <div className="text-center text-lg">
                <p>It will be arriving sometime soon.</p>
              </div>
            )}
          </>
        )}
      </motion.div>

      {/* Floating illusion container */}
      <motion.div
        className={`absolute bottom-0 flex w-full items-center justify-center`}
        style={{ height: floatingBollSize }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          stage === 1
            ? { opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] } // loop for logo
            : { opacity: 1, scale: 1 } // stable for timer
        }
        transition={
          stage === 1
            ? {
                delay,
                duration: durationTime,
                repeat: Infinity,
                repeatDelay,
                ease: "easeInOut",
                times: [0, 0.25, 0.75, 1],
              }
            : { delay, duration: 1, ease: "easeOut" } // only fade-in once
        }
      >
        {/* Text (fades in when bg opacity ≥ 0.8) */}
        {stage === 1 && (
          <motion.div
            className="relative z-50 flex h-full w-full -translate-y-2.5 flex-col items-center justify-center space-y-5 text-center"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              className="flex flex-wrap font-medium"
              style={{
                fontSize: "clamp(2rem, 8vw, 5rem)",
                gap: "clamp(0.2em, 4vw, 2.5em)",
              }}
            >
              {comingSoonStr.split("").map((char, i) => (
                <span key={i} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <h2
              className="font-medium tracking-widest text-zinc-200"
              style={{
                fontSize: "clamp(0.75rem, 3.5vw, 1.75rem)",
                letterSpacing: "clamp(0.05em, 2vw, 0.2em)",
              }}
            >
              We are working on something special for you!
            </h2>
          </motion.div>
        )}

        {stage === 2 && <SocialIcons width={floatingBollSize} />}

        {/* Background glowing sphere */}
        <motion.div
          className={`via-Bg-Primary to-Bg-Primary/50 absolute h-full rounded-full bg-gradient-to-b from-[rgba(255,255,255,0.5)] from-0% via-30% to-95% drop-shadow-lg`}
          style={{ zIndex: 2, width: floatingBollSize }}
          animate={
            stage === 1
              ? { opacity: [0, 1, 1, 0] } // loop for logo
              : { opacity: 1 } // stable for timer
          }
          transition={
            stage === 1
              ? {
                  delay,
                  duration: durationTime,
                  repeat: Infinity,
                  repeatDelay,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.75, 1],
                }
              : { delay, duration: 1, ease: "easeOut" } // only fade-in once
          }
          onUpdate={(latest) => {
            if (typeof latest.opacity === "number")
              setShowText(latest.opacity >= 0.8);
          }}
        />

        {/* Floating orb */}
        <motion.div
          className="bg-Secondary absolute bottom-0 left-1/2 h-1/2 -translate-x-1/2 translate-y-1/2 rounded-full"
          animate={{ y: [0, -offset, -offset, 0] }}
          transition={{
            delay,
            duration: durationTime,
            repeat: Infinity,
            repeatDelay,
            ease: "easeInOut",
            times: [0, 0.25, 0.75, 1],
          }}
          style={{
            zIndex: isFront ? 3 : 1,
            width: floatingBollSize / 2,
            filter: `blur(${floatingBollSize / 7}px)`,
          }}
          onUpdate={(latest) => {
            if (typeof latest.y === "number") {
              const tolerance = 20;
              if (latest.y <= -offset + tolerance && isFront) setIsFront(false);
              if (latest.y >= -tolerance && !isFront) setIsFront(true);
            }
          }}
        />
      </motion.div>
    </div>
  );
}
