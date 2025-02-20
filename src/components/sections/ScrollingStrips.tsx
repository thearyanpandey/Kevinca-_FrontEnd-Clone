import { motion } from 'framer-motion';

const ScrollingStrips = () => {
  const text = "KevinWalton. ".repeat(8);

  return (
    <div className="min-h-screen flex items-center font-fk-display justify-center bg-[#FEF2E6] overflow-hidden relative">
      {/* Container with tilt */}
      <div className="w-[150%] -rotate-12 flex flex-col gap-16"> {/* Increased gap-16 for more vertical space */}
        {/* Top strip - moving right */}
        <div className="bg-[#0A0A0A] py-4 relative overflow-hidden w-full">
          <motion.div
            className="text-[#FEF2E6] text-8xl font-fk-display whitespace-nowrap font-bold"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {text + text}
          </motion.div>
        </div>

        {/* Bottom strip - moving left */}
        <div className="bg-[#0A0A0A] py-4 relative overflow-hidden w-full">
          <motion.div
            className="text-[#FEF2E6] text-8xl font-fk-display whitespace-nowrap font-bold"
            animate={{
              x: ["-50%", "0%"]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {text + text}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingStrips;