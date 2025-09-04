import { motion } from "framer-motion";
export default function TimeBox({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const padded = String(value).padStart(2, "0");
  return (
    <motion.div className="relative w-full overflow-hidden rounded-xl p-0.5">
      {/* Rotating Gradient Border */}
      <motion.div
        className="absolute right-1/2 bottom-1/2 z-0 h-[150%] w-1/3 translate-1/2 rotate-45 rounded-xl blur-sm"
        animate={{
          rotate: [0, 180, 180, 360],
          background: [
            "linear-gradient(45deg, rgb(9,70,110), rgb(23,138,139))",
            "linear-gradient(45deg, rgb(23,138,139), rgb(111,204,221))",
            "linear-gradient(45deg, rgb(111,204,221), rgb(9,70,110))",
          ],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "linear",
          times: [0, 0.45, 0.55, 1],
        }}
      />

      {/* Inner Content */}
      <div className="bg-Bg-Primary relative z-0 flex h-full w-full flex-col items-center justify-center rounded-xl shadow-lg">
        <h1
          className="font-extrabold tracking-widest text-white"
          style={{
            fontSize: "clamp(2rem, 4vw, calc(((40vh / 4) * 0.9) * 0.6))",
          }}
        >
          {padded}
        </h1>
        <h2
          className="font-medium tracking-wider text-gray-300 uppercase"
          style={{
            fontSize: "clamp(0.8rem, 1.5vw, calc(((40vh / 4) * 0.9) * 0.2))",
          }}
        >
          {label}
        </h2>
      </div>
    </motion.div>
  );
}
