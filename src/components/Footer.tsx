"use client";

import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "motion/react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

export const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          y: { duration: 0.9, ease: "easeOut" },
          opacity: { duration: 1.1, delay: 0.2, ease: "easeIn" },
        },
      }}
      viewport={{ once: true }}
      className="relative min-h-[10vh] w-full bg-black overflow-hidden rounded-3xl p-[8%]"
    >
      {/* Top bar with logo and social */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <motion.img
            initial={{ y: "30px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: "easeOut",
            }}
            src="/whiteGantt.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <motion.span
            initial={{ x: "-20px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { duration: 0.6, delay: 1, ease: "easeIn" },
              opacity: { duration: 1.3, delay: 1.1, ease: "easeIn" },
            }}
            className="font-semibold text-white"
          >
            Ganttify
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 1.2,
              delay: 1.4,
            },
          }}
          viewport={{ once: true }}
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 400, damping: 15 },
          }}
          className="flex gap-4"
        >
          <Link
            href="#"
            className="text-white/20 transition-colors rounded-xl border border-neutral-600 p-3"
          >
            <FaXTwitter className="h-5 w-5 text-white/60" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            className="text-white/20 transition-colors rounded-xl border border-neutral-600 p-3"
          >
            <FaFacebook className="h-5 w-5 text-white/60" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="text-white/20 transition-colors rounded-xl border border-neutral-600 p-3"
          >
            <IoLogoInstagram className="h-5 w-5 text-white/60" />
            <span className="sr-only">Instagram</span>
          </Link>
        </motion.div>
      </div>

      {/* Navigation grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.9,
            },
          }}
          viewport={{ once: true }}
        >
          <h2 className="font-semibold text-white mb-4">Ganttify</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Home</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Product</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Customer Success</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Templates</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Trust & Security</span>
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 1.0,
            },
          }}
          viewport={{ once: true }}
        >
          <h2 className="font-semibold text-white mb-4">Solutions</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Project Management</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Goal Management</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Agile Management</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Task Management</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Productivity</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Work Management</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Project Planning</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">To Do Lists</span>
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 1.1,
            },
          }}
          viewport={{ once: true }}
        >
          <h2 className="font-semibold text-white mb-4">About Us</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Company</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Leadership</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Customers</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Careers</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Changelog</span>
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 1.2,
            },
          }}
          viewport={{ once: true }}
        >
          <h2 className="font-semibold text-white mb-4">Resources</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Help Center</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">FAQ</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Developers & API</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Community</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Events</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Status</span>
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 1.3,
            },
          }}
          viewport={{ once: true }}
        >
          <h2 className="font-semibold text-white mb-4">Helpful Links</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Legal center</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Privacy policy</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="font-thin">Partnerships</span>
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

     <div className="w-full h-px  bg-neutral-800 "></div>
      <motion.div
        initial={{ opacity: 0, y: "-40px" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            y: { duration: 0.9, delay: 1.2, ease: "easeOut" },
            opacity: { duration: 0.8, delay: 1.4, ease: "easeIn" },
          },
        }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-white pt-16"
      >
        <Select defaultValue="us">
          <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800">
            <SelectValue>
              <div className="flex items-center gap-2">
                <span className="text-sm">🇺🇸</span> United States
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">
              <div className="flex items-center gap-2">
                <span className="text-sm">🇺🇸</span> United States
              </div>
            </SelectItem>
            {/* Add more countries as needed */}
          </SelectContent>
        </Select>

        <p className="text-sm">© Ganttify 2024. All Rights Reserved</p>
      </motion.div>
    </motion.div>
  );
};
