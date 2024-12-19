"use client";

import { motion } from "motion/react";
import React from "react";

const Trustees = () => {
  return (
    <div className="flex flex-col bg-white rounded-3xl p-6 justify-center items-center gap-5 w-full h-[250px]">
      <motion.span
        className="text-lg font-semibold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.5,
          },
        }}
        //viewport={{ once: true }}
      >
        Trusted by 2 million+ teams
      </motion.span>
      <div className="flex gap-10 justify-between items-center w-full px-24 pt-2">
        {[
          { src: "/Medium.png", alt: "medium", height: "h-6", width: "w-40" },
          {
            src: "/mailchimp.png",
            alt: "mailchimp",
            height: "h-30",
            width: "w-40",
          },
          {
            src: "/evernote.png",
            alt: "evernote",
            height: "h-12",
            width: "w-40",
          },
          { src: "/dropbox.png", alt: "dropbox", height: "h-8", width: "w-36" },
          {
            src: "/microsoft.png",
            alt: "microsoft",
            height: "h-7",
            width: "w-36",
          },
        ].map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${image.width} ${image.height} grayscale`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: index * 0.2 + 0.5,
              },
            }}
            // viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default Trustees;
