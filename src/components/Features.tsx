"use client";

import { motion} from "framer-motion";
import { GiJigsawBox } from "react-icons/gi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { GoGitPullRequest } from "react-icons/go";
import { TfiTarget } from "react-icons/tfi";
import { IoFileTray } from "react-icons/io5";
import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-white rounded-3xl p-[8%] w-full min-h-screen flex flex-col gap-5">
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
        <GiJigsawBox /> Features
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
        Everything Your Team Is Looking For
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
        className="text-black/80"
      >
        Ganttify's exceptional flexibility can handle any type of work. And we
        never stop innovating
      </motion.span>

      <div className="grid grid-cols-2 gap-28 mt-20">
        {[
          {
            id: 1,
            icon: <RiBarChartBoxLine />,
            title: "Project Management",
            gradient: "w-64 h-28 bg-purple-300 top-16 left-10 blur-3xl",
            description:
              "Manage your projects from start to finish. With all your projects on Ganttify, you'll always know who's doing what, by when.",
          },
          {
            id: 2,
            icon: <GoGitPullRequest />,
            title: "Workflows and Automation",
            gradient:
              "w-64 h-28 bg-teal-400/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl",
            description:
              "Manage your projects from start to finish. With all your projects on Ganttify, you'll always know who's doing what, by when.",
          },
          {
            id: 3,
            icon: <TfiTarget />,
            title: "Goals and Reporting",
            gradient: "w-64 h-28 bg-teal-200/30 bottom-12 right-10 blur-3xl",
            description:
              "See how each project and portfolio ladders up to the company objectives and keep everyone focused on the work that matters.",
          },
          {
            id: 4,
            icon: <IoFileTray />,
            title: "Resource Management",
            gradient:
              "w-64 h-28 bg-purple-200 top-1/2 right-3 transform  -translate-y-1/2 blur-3xl",
            description:
              "Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 300, x: item.id % 2 === 0 ? 300 : -300 }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                opacity: { duration: 1.3, delay: 0.5, ease: "easeIn" },
                x: { duration: 0.9, delay: 0.4, ease: "easeOut" },
                y: { duration: 0.9, delay: 0.4, ease: "easeOut" },
              },
            }}
            viewport={{ once: true }}
            custom={index}
            className="flex flex-col gap-8"
          >
            <div className="w-full h-[300px] rounded-3xl border border-gray-200 relative overflow-hidden">
              <div className={`absolute ${item.gradient}`}></div>
              {/* <Image
                src="/workflow.png"
                alt=""
                width={500}
                height={500}
                className="absolute w-[100px] h-[120px]"
              /> */}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-2xl font-semibold">
                {item.icon} {item.title}
              </div>
              <span className="text-gray-500 text-base">
                {item.description}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
