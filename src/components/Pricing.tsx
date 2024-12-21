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

const plans = [
  {
    title: "Personal",
    price: "$29",
    subtitle: "per month",
    description:
      "For individuals and small teams looking to manage their tasks",
    features: [
      "Unlimited contacts",
      "Bulk emailing",
      "AI Integration",
      "View & share up to 3 years",
      "Collaboration & permissions",
    ],
    bgClass: "bg-zinc-700 text-white border-zinc-800",
    buttonClass: "bg-zinc-800 hover:bg-zinc-700",
  },
  {
    title: "Pro",
    price: "$39",
    subtitle: "per month",
    description:
      "For growing teams that need to track their projects' progress and hit deadlines",
    features: [
      "Email sequences",
      "Send emails from multiple domains",
      "Connect multiple email accounts",
      "Fully adjustable sharing permissions",
      "Migration services",
    ],
    bgClass: "bg-white text-black scale-[1.2]",
    buttonClass: "bg-zinc-800 hover:bg-zinc-700",
  },
  {
    title: "Beyond limits",
    price: "Custom Plan",
    subtitle: "",
    description:
      "For companies that need to manage a portfolio of work and goals across departments",
    features: [
      "White glove onboarding",
      "Custom billing",
      "Dedicated slack channel",
      "Dedicated point of contact",
      "Unlimited reporting",
    ],
    bgClass: "bg-zinc-700 text-white border-zinc-800",
    buttonClass: "bg-zinc-800 hover:bg-zinc-700",
  },
];

export const Pricing = () => {
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
          initial={{ y: "-20px", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              y: { duration: 0.4, ease: "easeIn", delay: 0.6 },
              opacity: { duration: 0.8, delay: 0.7, ease: "easeIn" },
            },
          }}
          viewport={{ once: true }}
          className="flex gap-3 items-center rounded-lg bg-gray-800/20 py-1 px-2 text-white border text-sm border-slate-300/20  w-fit"
        >
          <LuCreditCard /> Pricing
        </motion.div>

        <motion.span
          initial={{ y: "-80px", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              y: { duration: 0.9, ease: "easeIn", delay: 0.8 },
              opacity: { duration: 1.3, delay: 1.3, ease: "easeIn" },
            },
          }}
          viewport={{ once: true }}
          className="text-7xl font-bold text-white tracking-tight"
        >
          Simple and Flexible <br /> Pricing
        </motion.span>

        <Tabs defaultValue="annually" className="w-full -mt-[90px]">
          <TabsList
            asChild
            className="flex items-center bg-neutral-800 w-fit gap-1 py-[22px] justify-self-end"
          >
            <motion.div
              initial={{ opacity: 0, y: "40px" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  y: { duration: 0.9, ease: "easeIn", delay: 0.8 },
                  opacity: { duration: 1.3, delay: 1.3, ease: "easeIn" },
                },
              }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </TabsList>
          <TabsContent
            value="annually"
            className="pt-[10%] flex items-center justify-between gap-10 px-[3%]"
          >
            <div className="flex justify-between space-x-4">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  className={`relative w-[30%] rounded-3xl ${plan.bgClass}`}
                  initial={{
                    opacity: 0,
                    y: 200 + index * 100,
                    scale: index === 1 ? 0.9 : 1,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      y: {
                        duration: 1.3,
                        delay: index * 0.2 + 0.4,
                      },
                      opacity: {
                        duration: 1,
                        delay: index * 0.2 + 0.6,
                        ease: "easeIn",
                      },
                      scale: {
                        duration: 0.3,
                        delay: 2.5,
                        ease: "easeIn",
                      },
                    },
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    rotate: 3,
                    transition: { type: "spring", stiffness: 400, damping: 15 },
                  }}
                >
                  <Card className={`${plan.bgClass}`}>
                    <CardHeader>
                      <CardTitle>
                        <h3 className="text-xl font-medium mb-2">
                          {plan.title}
                        </h3>
                        <div className="flex items-baseline">
                          <span className="text-5xl font-bold">
                            {plan.price}
                          </span>
                          {plan.subtitle && (
                            <span className="ml-2 text-zinc-400">
                              {plan.subtitle}
                            </span>
                          )}
                        </div>
                      </CardTitle>
                      <p className="text-sm text-zinc-400 mt-4 pb-5 border-b border-dashed border-b-zinc-600">
                        {plan.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium mb-4">This Plan Includes:</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-sm text-zinc-400"
                          >
                            <Check
                              className={`h-5 w-5 ${
                                index === 1 ? "text-black" : "text-white"
                              } mr-2 flex-shrink-0`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full text-white h-[52px] rounded-2xl ${plan.buttonClass}`}
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="monthly">20</TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};
