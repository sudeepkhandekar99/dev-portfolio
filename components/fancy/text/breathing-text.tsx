"use client";

import * as React from "react";
import { motion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

type BreathingTextProps = {
  children: string;
  as?: React.ElementType;
  className?: string;

  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;

  /** motion Transition (typed) */
  transition?: Transition;

  staggerDuration?: number;
  repeatDelay?: number;
};

export default function BreathingText({
  children,
  as: Component = "span",
  className,
  fromFontVariationSettings = "'wght' 350",
  toFontVariationSettings = "'wght' 600",
  transition = { duration: 1.8, ease: [0.42, 0, 0.58, 1] }, 
  staggerDuration = 0.04,
  repeatDelay = 0.4,
}: BreathingTextProps) {
  return (
    <Component className={cn("inline-flex", className)}>
      {children.split("").map((char, i) => {
        const perCharTransition: Transition = {
          ...transition,
          delay: i * staggerDuration,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay,
        };

        return (
          <motion.span
            key={i}
            className="inline-block"
            initial={{
              fontVariationSettings: fromFontVariationSettings,
              opacity: 0.75,
            }}
            animate={{
              fontVariationSettings: toFontVariationSettings,
              opacity: 1,
            }}
            transition={perCharTransition}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </Component>
  );
}