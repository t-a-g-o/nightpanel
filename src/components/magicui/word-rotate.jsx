"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WordRotate({ words, gradients, className = "", duration = 2000 }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      containerRef.current.style.minWidth = `${containerWidth}px`;
    }
  }, [words]);

  return (
    <span ref={containerRef} className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`inline-block w-full text-center ${
            gradients[index].startsWith("text-")
              ? gradients[index]
              : `bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent`
          } whitespace-nowrap`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
