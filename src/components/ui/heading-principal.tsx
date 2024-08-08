import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/cn";

export const HeadinPrincipal = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1.5,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  return (
    <motion.h1 className={cn("z-10 font-medium", className)} ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span key={word + idx} className="opacity-0">
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};
