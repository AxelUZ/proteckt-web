import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import rotatingWords from "../data/heroRotatingWords";

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previous) => (previous + 1) % rotatingWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 overflow-hidden sm:h-16 lg:h-20">
      <AnimatePresence mode="wait">
        <motion.h3
          key={rotatingWords[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
          className="
            absolute
            font-heading
            text-5xl
            font-bold
            leading-none
            text-primary
            sm:text-6xl
            lg:text-7xl
          "
        >
          {rotatingWords[index]}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
}