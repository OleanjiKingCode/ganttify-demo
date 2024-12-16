"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { duration: 0.9, ease: "easeOut" },
        opacity: { duration: 1.3, delay: 0.2, ease: "easeIn" },
      }}
      className="flex rounded-3xl bg-white px-8 py-4 items-center justify-between w-full "
    >
      <div className="flex gap-16">
        <div className="space-x-2 flex items-center">
          <motion.img
            initial={{ y: "30px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: "easeOut",
            }}
            src="/gantt.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <motion.span
            initial={{ x: "-20px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { duration: 0.6, delay: 0.8, ease: "easeIn" },
              opacity: { duration: 1.3, delay: 0.6, ease: "easeIn" },
            }}
            className="font-semibold"
          >
            Ganttify
          </motion.span>
        </div>
        <div className="flex gap-6 text-xs items-center">
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.7,
              ease: "easeIn",
            }}
          >
            Product
          </motion.span>
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.8,
              ease: "easeIn",
            }}
          >
            Solutions
          </motion.span>
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.9,
              ease: "easeIn",
            }}
          >
            Resources
          </motion.span>
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 1,
              ease: "easeIn",
            }}
          >
            Company
          </motion.span>
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 1.1,
              ease: "easeIn",
            }}
          >
            Pricing
          </motion.span>
        </div>
      </div>
      <div className="space-x-4">
        <motion.button
          initial={{ x: "20px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            ease: "easeIn",
          }}
          className="bg-white text-black border py-2 px-3 rounded-lg text-sm border-gray-300"
        >
          Sign In
        </motion.button>
        <motion.button
          initial={{ y: "30px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="bg-black text-white py-2 px-3 rounded-lg text-sm"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
};
