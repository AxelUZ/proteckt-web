import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import heroBackgroundImages from "../data/heroBackgroundImages";

export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previous) => (previous + 1) % heroBackgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="sync">
        <motion.img
          key={heroBackgroundImages[index]}
          src={heroBackgroundImages[index]}
          alt="Técnico de Proteck realizando un servicio."
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>
    </div>
  );
}