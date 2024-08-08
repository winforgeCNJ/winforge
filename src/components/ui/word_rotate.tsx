"use client";

import { cn } from "@/lib/cn";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"span">;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -25 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="mb-4 w-[17rem] animate-fade-in-up overflow-hidden text-[16px] font-medium text-secondary animate-delay-[1200ms] animate-duration-500 sm:w-[25rem] sm:text-[20px] md:w-[34rem] md:text-[26px] md:leading-9 lg:text-[28px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={cn(className)}
          {...framerProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
