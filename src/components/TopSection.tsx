"use client";
import React from "react";
import { Particles } from "./ui/Particles";
import { motion } from "motion/react";
import { IoArrowForward } from "react-icons/io5";

export const TopSection = () => {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2  -translate-y-[80%]  w-[80rem] h-[80rem] bg-white/15  blur-3xl rounded-full"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150"></div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div className="pt-[5%] flex flex-col gap-10 items-center absolute inset-0 ">
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 0.9, ease: "easeIn", delay: 1.4 },
            opacity: { duration: 1, delay: 1.6, ease: "easeIn" },
          }}
          className="flex gap-3 items-center rounded-lg bg-slate-400/20 py-1 px-4 text-white border text-sm border-slate-300/20 "
        >
          <span>Discover the all new Ganttify 2.0</span>
          <div className="rounded-lg bg-slate-400/20 py-1 px-2">
            <IoArrowForward />
          </div>
        </motion.div>

        <motion.span
          initial={{ y: "60px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 0.5, ease: "easeIn", delay: 1 },
            opacity: { duration: 1.1, delay: 1.2, ease: "easeIn" },
          }}
          className="text-7xl font-bold text-white/70 text-center"
        >
          One Tools For Doing It <br /> All Together
        </motion.span>

        <motion.span
          initial={{ y: "40px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 0.8, ease: "easeIn", delay: 1.4 },
            opacity: { duration: 1, delay: 1.6, ease: "easeInOut" },
          }}
          className=" font-thin text-base text-white/60 text-center"
        >
          Ganttify enables you to achieve clarity and significant results on a
          large scale by <br /> linking tasks and workflows to overarching
          objectives of the company.
        </motion.span>
        <div className="flex items-center justify-center gap-5">
          <motion.button
            initial={{ y: "30px", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 2.0,
                ease: "easeOut",
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: { type: "spring", stiffness: 400, damping: 15 },
            }}
            className="bg-white text-black border px-5 py-3  rounded-xl text-sm border-gray-300 font-semibold"
          >
            Get Started
          </motion.button>
          <motion.button
            initial={{ x: "-40px", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 2.2,
                ease: "easeIn",
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: { type: "spring", stiffness: 400, damping: 15 },
            }}
            className="bg-black text-white px-5 py-3  rounded-xl bg-neutral-500/20 border border-slate-300/30 text-sm"
          >
            How it Works
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
