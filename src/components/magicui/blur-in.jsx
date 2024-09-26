"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BlurIn = ({ children, className, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;
