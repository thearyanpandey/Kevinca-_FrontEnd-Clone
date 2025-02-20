import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = ({ onLoadingComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Start the loading animation
    const duration = 3000; // 3 seconds total
    const interval = 30; // Update every 30ms
    const steps = duration / interval;
    const incrementValue = 100 / steps;
    let currentPercentage = 0;

    const timer = setInterval(() => {
      currentPercentage += incrementValue;

      if (currentPercentage >= 100) {
        clearInterval(timer);
        setPercentage(100);
        // Wait a moment at 100% before triggering completion
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 500);
      } else {
        setPercentage(Math.min(Math.round(currentPercentage), 100));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <AnimatePresence>
        <motion.div
          className="relative text-[#FDF2E6] text-8xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            key={percentage}
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {percentage}
          </motion.span>
          <span className="text-[#FDF2E6]">%</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Loading;
