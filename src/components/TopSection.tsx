"use client";
import React from "react";
import { Particles } from "./ui/Particles";
import { IoArrowForward } from "react-icons/io5";
import {
  FaFolderMinus,
  FaImage,
  FaUserAlt,
  FaList,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

export const TopSection = () => {
  const FloatingIcons = () => {
    const icons = [
      {
        Component: FaFolderMinus,
        rotate: "-12deg",
        size: "w-16 h-16",
        position: "top-[14%] left-[10%]",
        toRight: true,
      },
      {
        Component: FaImage,
        rotate: "15deg",
        size: "w-14 h-14",
        position: "top-[36%] left-[23%]",
        toRight: false,
      },
      {
        Component: FaList,
        rotate: "-8deg",
        size: "w-14 h-14",
        position: "bottom-[39%] left-[12%]",
        toRight: true,
      },
      {
        Component: FaUserAlt,
        rotate: "10deg",
        size: "w-16 h-16",
        position: "top-[18%] right-[10%]",
        toRight: true,
      },
      {
        Component: FaCalendar,
        rotate: "-15deg",
        size: "w-14 h-14",
        position: "top-[36%] right-[23%]",
        toRight: false,
      },
      {
        Component: FaClock,
        rotate: "8deg",
        size: "w-14 h-14",
        position: "bottom-[39%] right-[12%]",
        toRight: true,
      },
    ];

    return (
      <>
        {icons.map((icon, index) => {
          const { Component, rotate, size, position } = icon;
          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                rotate: rotate,
                scale: 0.1,
                x: icon.toRight ? "-30px" : "30px",
              }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                opacity: { duration: 1, delay: 1.1 },
                scale: { duration: 1.2, delay: 1.2 },
                x: {
                  duration: 0.7,
                  delay: 2,
                  ease: "easeInOut",
                },
              }}
              className={`absolute ${position} flex items-center justify-center bg-neutral-800 rounded-2xl ${size} overflow-hidden`}
            >
              <div className="absolute -bottom-2 w-[120%] h-[40%] bg-gradient-to-t from-gray-400 to-transparent blur-lg rounded-2xl"></div>
              <div className="absolute inset-0 border border-gray-400 rounded-2xl opacity-40 z-10"></div>
              <Component className="text-gray-300 z-20 w-6 h-6" />
            </motion.div>
          );
        })}
      </>
    );
  };

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
      <FloatingIcons />
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
        <motion.div
          initial={{ opacity: 0, y: "300px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { duration: 0.9, delay: 1.6, ease: "easeOut" },
            opacity: { duration: 1.4, delay: 1.5, ease: "easeIn" },
          }}
          className="bg-neutral-700 border border-gray-400 rounded-[2rem] p-4 w-[55%] mt-12"
        >
          <img
            src="./BG-IMAG.png"
            alt=""
            className="rounded-2xl  bg-cover bg-no-repeat bg-center"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
