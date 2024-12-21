"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

interface Testimonial {
  author: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Charolette Hanlin",
    role: "Co-Founder, Heroes Digital",
    rating: 4.8,
    quote:
      "Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.",
    avatar: "/faceOne.jpg",
  },
  {
    author: "Eleanor Pena",
    role: "Co-Founder, Heroes Digital",
    rating: 4.8,
    quote:
      "Using Ganttify has streamlined our project management process. It's incredibly effective in aligning our daily tasks with the company's strategic goals.",
    avatar: "/faceTwo.jpg",
  },
  {
    author: "Guy Hawkins",
    role: "Co-Founder, Heroes Digital",
    rating: 4.8,
    quote:
      "Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.",
    avatar: "/faceThree.jpg",
  },
  {
    author: "Kristin Watson",
    role: "Co-Founder, Heroes Digital",
    rating: 4.8,
    quote:
      "Ganttify's ability to connect tasks with our company's goals has given us a new level of clarity and efficiency in our project management efforts.",
    avatar: "/faceFour.jpg",
  },
  {
    author: "Jane Cooper",
    role: "Co-Founder, Heroes Digital",
    rating: 4.8,
    quote:
      "Using Ganttify, we've been able to ensure that all our project activities are aligned with our overarching business objectives, leading to better coordination and success.",
    avatar: "/faceFive.jpg",
  },
  {
    author: "Leslie Alexander",
    role: "Co-Founder, Heroes Digital",
    rating: 4.8,
    quote:
      "Ganttify has transformed our approach to project management. It ensures that every task, no matter how small, is aligned with our company's mission and goals.",
    avatar: "/faceSix.jpg",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < Math.floor(rating)
              ? "fill-purple-600 text-purple-600"
              : "fill-muted stroke-muted-foreground"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-muted-foreground">{rating}</span>
    </div>
  );
}

export const TestimonialsSection = () => {
  return (
    <div className="bg-white rounded-3xl p-[8%] w-full min-h-[50vh] flex flex-col gap-5">
      <div className="flex flex-col items-center gap-3 mb-10">
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
          <svg
            className="h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Customers
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
          See What Our Customers Are Saying
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
          Here's what some of our customers say about our platform.
        </motion.span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className={`relative rounded-3xl`}
            initial={{
              opacity: 0,
              scale: 0.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                opacity: {
                  duration: 1,
                  delay: i * 0.2 + 0.6,
                  ease: "easeIn",
                },
                scale: {
                  duration: 0.9,
                  delay: 0.6,
                  ease: "easeIn",
                },
              },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Card className="border bg-card">
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 text-sm font-semibold">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    alt={`Avatar of ${testimonial.author}`}
                    className="rounded-full"
                    height={40}
                    src={testimonial.avatar}
                    width={40}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
