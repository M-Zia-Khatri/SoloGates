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

export default function ComingSoon() {
  const { isComingSoon, countdown } = useComingSoon();
  const [offset, setOffset] = useState(0);
  const [isFront, setIsFront] = useState(true);
  const [showText, setShowText] = useState(false);
  const [stage, setStage] = useState<1 | 2>(1);

  // Compute offset once
  useEffect(() => {
    setOffset(window.innerHeight * 0.5);
  }, []);

  // Toggle stages every full animation cycle
  useEffect(() => {
    if (!offset) return;
    const timer = setInterval(
      () => setStage((s) => (s === 1 && isComingSoon ? 2 : 1)),
      cycleTime
    );
    return () => clearInterval(timer);
  }, [offset]);

  return (
    <div className="relative w-screen h-screen flex items-start justify-center overflow-hidden text-white bg-Bg-Primary">
      {/* Stage switching content (Logo / Countdown) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
        transition={{
          delay,
          duration: durationTime,
          repeat: Infinity,
          repeatDelay,
          ease: "easeInOut",
          times: [0, 0.25, 0.75, 1],
        }}
      >
        {stage === 1 ? (
          <motion.img
            className="h-[55vh] z-50"
            src="/images/logos/LongLogoBlackBG.png"
          />
        ) : (
          <>
            <div className="h-[40vh] w-[40vh] grid grid-cols-2 grid-rows-2 p-4 gap-4">
              <TimeBox label="Day" value={countdown?.days ?? 0} />
              <TimeBox label="Hours" value={countdown?.hours ?? 0} />
              <TimeBox label="Minutes" value={countdown?.minutes ?? 0} />
              <TimeBox label="Sec" value={countdown?.seconds ?? 0} />
            </div>
            {!isComingSoon && (
              <div className="text-center text-lg">
                It will be arriving sometime soon.
              </div>
            )}
          </>
        )}
      </motion.div>

      {/* Floating illusion container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
        transition={{
          delay,
          duration: durationTime,
          repeat: Infinity,
          repeatDelay,
          ease: "easeInOut",
          times: [0, 0.25, 0.75, 1],
        }}
        className="absolute flex justify-center items-center bottom-0 w-full h-[60vh]"
      >
        {/* Text (fades in when bg opacity ≥ 0.8) */}
        {stage === 1 && (
          <motion.div
            className="h-full flex flex-col items-center justify-center -translate-y-2.5 text-center relative z-50 space-y-10 w-full"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              className="font-medium tracking-widest"
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                letterSpacing: "clamp(0.2em, 6vw, 2em)",
              }}
            >
              Coming soon
            </h1>
            <h2
              className="font-medium tracking-widest"
              style={{
                fontSize: "clamp(1rem, 4vw, 2rem)",
                letterSpacing: "clamp(0.05em, 2vw, 0.2em)",
              }}
            >
              We are working on something special for you!
            </h2>
          </motion.div>
        )}

        {stage === 2 && <SocialIcons />}

        {/* Background glowing sphere */}
        <motion.div
          className="h-full w-[60vh] bg-gradient-to-b from-[rgba(255,255,255,0.5)] from-0% via-Bg-Primary via-30% to-Bg-Primary/50 to-95% rounded-full absolute drop-shadow-lg"
          style={{ zIndex: 2 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            delay,
            duration: durationTime,
            repeat: Infinity,
            repeatDelay,
            ease: "easeInOut",
            times: [0, 0.25, 0.75, 1],
          }}
          onUpdate={(latest) => {
            if (typeof latest.opacity === "number")
              setShowText(latest.opacity >= 0.8);
          }}
        />

        {/* Floating orb */}
        <motion.div
          className="w-[30vh] h-[30vh] bg-Secondary absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full blur-[50px]"
          animate={{ y: [0, -offset, -offset, 0] }}
          transition={{
            delay,
            duration: durationTime,
            repeat: Infinity,
            repeatDelay,
            ease: "easeInOut",
            times: [0, 0.25, 0.75, 1],
          }}
          style={{ zIndex: isFront ? 3 : 1 }}
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
