import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const InverseCursor = ({ children, className }: Props) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e:any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 30,
      width: 30,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className={twMerge("App", className)}>
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="title"
      >
        <motion.div
          className="cursor pointer-events-none bg-[#111] h-[32px] w-[32px] rounded-full fixed top-0 left-0 "
          variants={variants}
          style={{ mixBlendMode: "difference" }} 
          animate={cursorVariant}
        >
        </motion.div>
          {children}
      </h1>
    </div>
  );
};

export default InverseCursor;
