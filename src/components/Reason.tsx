"use client";

import { motion } from "motion/react";
import React from "react";
import { GiJigsawBox } from "react-icons/gi";
import { GoGitPullRequest } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { IoFileTray, IoFlash } from "react-icons/io5";
import { PiNetwork } from "react-icons/pi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { TfiTarget } from "react-icons/tfi";

export const Reason = () => {
  return (
    <div className="bg-white rounded-3xl p-[8%] w-full min-h-[50vh] flex flex-col gap-5">
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.2,
            delay: 0.4,
          },
        }}
        viewport={{ once: true }}
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 400, damping: 15 },
        }}
        className="bg-white text-gray-600 border px-2 py-1 w-fit rounded-lg text-sm border-gray-300 flex items-center gap-2 backdrop-blur-md shadow-sm"
      >
        <GiJigsawBox /> Why Ganttify
      </motion.button>
      <motion.h2
        initial={{ opacity: 0, y: 120 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            opacity: { duration: 1.3, delay: 0.5, ease: "easeIn" },
            y: { duration: 0.9, delay: 0.5, ease: "easeOut" },
          },
        }}
        viewport={{ once: true }}
        className="text-black text-[64px] font-bold tracking-tighter leading-tight"
      >
        Increase Productivity <br /> and Save Time
      </motion.h2>
      <motion.span
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            opacity: { duration: 1.3, delay: 0.5, ease: "easeIn" },
            y: { duration: 0.9, delay: 0.5, ease: "easeOut" },
          },
        }}
        viewport={{ once: true }}
        className="text-slate-500"
      >
        Supercharge productivity. Streamline work by doing it, seeing it, in one
        place.
      </motion.span>

      <div className="flex items-center gap-16 justify-between mt-12 ">
        {[
          {
            id: 1,
            icon: (
              <div className="w-10 h-10 rounded-lg bg-purple-800 flex items-center justify-center">
                <IoIosPeople className="text-purple-200 w-5 h-5" />
              </div>
            ),
            title: "Improve Collaboration",
            gradient: "w-64 h-28 bg-purple-300 top-16 left-10 blur-3xl",
            description:
              "Boost teamwork and efficiency with our easy-to-use collaboration tools. Communicate clearly and share documents in real-time.",
          },
          {
            id: 2,
            icon: (
              <div className="w-10 h-10  rounded-lg bg-blue-400 flex items-center justify-center">
                <IoFlash className="text-blue-100 w-5 h-5" />
              </div>
            ),
            title: "Enhance Visibility",
            gradient:
              "w-64 h-28 bg-teal-400/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl",
            description:
              "Keep track of your projects and tasks with clear, real-time updates. Our tools provide a comprehensive view of your progress",
          },
          {
            id: 3,
            icon: (
              <div className="w-10 h-10  rounded-lg bg-cyan-400 flex items-center justify-center">
                <PiNetwork className="text-cyan-100 w-5 h-5" />
              </div>
            ),
            title: "Automate Work",
            gradient: "w-64 h-28 bg-teal-200/30 bottom-12 right-10 blur-3xl",
            description:
              "Streamline your workflow by automating repetitive tasks. Our solutions help you set up automatic processes",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: index * 0.2 + 0.9,
              },
            }}
            viewport={{ once: true }}
            custom={index}
            className="flex flex-col gap-8"
          >
            <div className="w-full min-h-[240px] bg-white rounded-3xl border border-gray-200 p-8 flex flex-col gap-7">
              {item.icon}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-4 text-2xl font-semibold">
                  {item.title}
                </div>
                <span className="text-gray-500 text-base">
                  {item.description}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
