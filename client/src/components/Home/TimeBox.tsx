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
    <motion.div className="relative w-full p-0.5 rounded-xl overflow-hidden">
      {/* Rotating Gradient Border */}
      <motion.div
        className="absolute bottom-1/2 right-1/2 translate-1/2 w-1/3 rotate-45 blur-sm h-[150%] rounded-xl z-0"
        animate={{
          rotate: 360,
          background: [
            "linear-gradient(45deg, rgb(9,70,110), rgb(23,138,139))",
            "linear-gradient(45deg, rgb(23,138,139), rgb(111,204,221))",
            "linear-gradient(45deg, rgb(111,204,221), rgb(9,70,110))",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "linear",
        }}
      />

      {/* Inner Content */}
      <div className="relative z-0 flex flex-col items-center justify-center w-full h-full bg-Bg-Primary rounded-xl shadow-lg">
        <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest mb-1">
          {padded}
        </div>
        <div className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
