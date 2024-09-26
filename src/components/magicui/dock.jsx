"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { cn } from "@/lib/utils";

const Dock = ({ className, children, ...props }) => {
  return (
    <motion.div
      className={cn(
        "mx-auto w-auto p-2 flex justify-center items-center gap-4 rounded-lg backdrop-blur-md bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Dock.displayName = "Dock";

const DockIcon = ({ name, href, highlight = false, ...props }) => {
  return (
    <Link href={href}>
      <motion.div
        className={cn(
          "text-sm font-medium cursor-pointer transition-colors duration-200",
          highlight
            ? "bg-white text-black px-3 py-1 rounded-md"
            : "text-white hover:text-gray-300 px-2 py-1"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {name}
      </motion.div>
    </Link>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
