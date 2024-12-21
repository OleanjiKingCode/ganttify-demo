"use client";
import React from "react";
import { Particles } from "./ui/Particles";
import { motion } from "motion/react";

export const Closing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          y: { duration: 0.9, ease: "easeOut" },
          opacity: { duration: 1.3, delay: 0.2, ease: "easeIn" },
        },
      }}
      viewport={{ once: true }}
      className="relative min-h-[60vh] w-full bg-black overflow-hidden rounded-3xl"
    >
      <div
        className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#104352] to-transparent rounded-[100%] blur-[100px] opacity-70"
        style={{
          maskImage:
            "radial-gradient(circle at 80% 50%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at 80% 50%, black, transparent 80%)",
          transform: "rotate(15deg) scale(1.5)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#104352] to-transparent rounded-[100%] blur-[80px] opacity-50"
        style={{
          maskImage:
            "radial-gradient(circle at 50% 90%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 90%, black, transparent 70%)",
          transform: "scale(1.2)",
        }}
      />
      <div
        className="absolute inset-0 bg-[#104352] rounded-full blur-[120px] opacity-20"
        style={{
          top: "60%",
          left: "60%",
          width: "80%",
          height: "80%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150"></div>

      <Particles
        className="absolute inset-0"
        quantity={120}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div className=" flex flex-col gap-10 items-center justify-center absolute inset-0 ">
        <motion.span
          initial={{ y: "60px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 0.5, ease: "easeIn", delay: 1 },
            opacity: { duration: 1.1, delay: 1.2, ease: "easeIn" },
          }}
          className="text-7xl font-bold text-white/70 text-center"
        >
          A Better Way to Work <br /> Today, Together
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
          large scale by linking <br /> tasks and workflows to the overarching
          objectives of the company
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
                duration: 0.4,
                delay: 2.1,
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
