"use client";

import React from "react";
import { Particles } from "./ui/Particles";
import { motion } from "motion/react";
import { LuCreditCard } from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { duration: 0.9, ease: "easeOut" },
        opacity: { duration: 1.3, delay: 0.2, ease: "easeIn" },
      }}
      className="relative min-h-[105vh] w-full bg-black overflow-hidden rounded-3xl"
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

      <div className="flex flex-col gap-10 absolute inset-0  p-[8%]">
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 0.9, ease: "easeIn", delay: 1.4 },
            opacity: { duration: 1, delay: 1.6, ease: "easeIn" },
          }}
          className="flex gap-3 items-center rounded-lg bg-gray-800/20 py-1 px-2 text-white border text-sm border-slate-300/20  w-fit"
        >
          <LuCreditCard /> Pricing
        </motion.div>

        <motion.span
          initial={{ y: "60px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 0.5, ease: "easeIn", delay: 1 },
            opacity: { duration: 1.1, delay: 1.2, ease: "easeIn" },
          }}
          className="text-7xl font-bold text-white tracking-tight"
        >
          Simple and Flexible <br /> Pricing
        </motion.span>

        <Tabs defaultValue="annually" className="w-full -mt-[90px]">
          <TabsList className="flex items-center bg-neutral-800 w-fit gap-1 py-[22px] justify-self-end">
            <TabsTrigger
              value="annually"
              className="px-8 py-2 text-white data-[state=active]:text-black font-semibold"
            >
              Annually
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="px-8 py-2 text-white data-[state=active]:text-black font-semibold"
            >
              Monthly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="annually"
            className="pt-[10%] flex items-center justify-between gap-10 px-[3%]"
          >
            {/* Personal Plan */}
            <Card className="relative bg-zinc-700 border-zinc-800 text-white w-[30%] rounded-3xl">
              <CardHeader>
                <CardTitle>
                  <h3 className="text-xl font-medium mb-2">Personal</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">$29</span>
                    <span className="ml-2 text-zinc-400">per month</span>
                  </div>
                </CardTitle>
                <p className="text-sm text-zinc-400 mt-4 pb-5 border-b border-dashed border-b-zinc-600">
                  For individuals and small teams looking to manage their tasks
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-4">This Plan Includes:</p>
                <ul className="space-y-3">
                  {[
                    "Unlimited contacts",
                    "Bulk emailing",
                    "AI Integration",
                    "View & share up to 3 years",
                    "Collaboration & permissions",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-zinc-400"
                    >
                      <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white h-[52px] rounded-2xl">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="relative bg-white text-black scale-[1.2] z-10 w-[30%] rounded-3xl">
              <CardHeader>
                <CardTitle>
                  <h3 className="text-xl font-medium mb-2">Pro</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">$39</span>
                    <span className="ml-2 text-zinc-500">per month</span>
                  </div>
                </CardTitle>
                <p className="text-sm text-zinc-500 mt-4 border-b border-dashed bprder-b-zinc-500 pb-5">
                  For growing teams that need to track their projects' progress
                  and hit deadlines
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-4">
                  Everything in Standard, plus:
                </p>
                <ul className="space-y-3">
                  {[
                    "Email sequences",
                    "Send emails from multiple domains",
                    "Connect multiple email accounts",
                    "Fully adjustable sharing permissions",
                    "Migration services",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-zinc-500"
                    >
                      <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white h-[52px] rounded-2xl">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Custom Plan */}
            <Card className="relative bg-zinc-700 border-zinc-800 text-white w-[30%] rounded-3xl">
              <CardHeader>
                <CardTitle>
                  <h3 className="text-xl font-medium mb-2">Beyond limits</h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">Custom Plan</span>
                  </div>
                </CardTitle>
                <p className="text-sm text-zinc-400 mt-4 pb-5 border-b border-dashed border-b-zinc-600">
                  For companies that need to manage a portfolio of work and
                  goals across departments
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-4">
                  Everything in Standard & Pro, plus:
                </p>
                <ul className="space-y-3">
                  {[
                    "White glove onboarding",
                    "Custom billing",
                    "Dedicated slack channel",
                    "Dedicated point of contact",
                    "Unlimited reporting",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-zinc-400"
                    >
                      <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white h-[52px] rounded-2xl">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="monthly">20</TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};
