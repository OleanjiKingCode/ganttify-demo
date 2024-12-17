"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Ri24HoursFill } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { IoMdStar } from "react-icons/io";

export const Navbar = () => {
  const NavMenu = (
    <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <Ri24HoursFill className="h-6 w-6" />
            <div className="mb-2 mt-4 text-lg font-medium">Oleanji</div>
            <p className="text-sm leading-tight text-muted-foreground">
              A console.log developer
            </p>
          </a>
        </NavigationMenuLink>
      </li>
      <ListItem href="/docs" title="Introduction">
        Re-usable components built using Radix UI and Tailwind CSS.
      </ListItem>
      <ListItem href="/docs/installation" title="Installation">
        How to install dependencies and structure your app.
      </ListItem>
      <ListItem href="/docs/primitives/typography" title="Typography">
        Styles for headings, paragraphs, lists...etc
      </ListItem>
    </ul>
  );
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
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
                </NavigationMenuTrigger>
                <NavigationMenuContent>{NavMenu}</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
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
                </NavigationMenuTrigger>
                <NavigationMenuContent>{NavMenu}</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
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
                </NavigationMenuTrigger>
                <NavigationMenuContent>{NavMenu}</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
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
                </NavigationMenuTrigger>
                <NavigationMenuContent>{NavMenu}</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
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
                </NavigationMenuTrigger>
                <NavigationMenuContent>{NavMenu}</NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="space-x-4">
        <motion.button
          initial={{ x: "20px", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.9,
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
          className="bg-white text-black border py-2 px-3 rounded-lg text-sm border-gray-300"
        >
          Sign In
        </motion.button>
        <motion.button
          initial={{ y: "30px", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.6,
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
          className="bg-black text-white py-2 px-3 rounded-lg text-sm"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
