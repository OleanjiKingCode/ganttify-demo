"use client";

import React from "react";
import { Particles } from "./ui/Particles";
import { motion } from "motion/react";

export const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { duration: 0.9, ease: "easeOut" },
        opacity: { duration: 1.3, delay: 0.2, ease: "easeIn" },
      }}
      className="relative h-[85vh] w-full bg-black overflow-hidden rounded-3xl"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2  translate-y-[80%]  w-[80rem] h-[80rem] bg-white/15  blur-3xl rounded-full"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150"></div>

      <Particles
        className="absolute inset-0"
        quantity={120}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </motion.div>
  );
};
