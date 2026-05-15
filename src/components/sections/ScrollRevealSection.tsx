import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollRevealSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealSectionProps) {
  const getInitialState = () => {
    const states = {
      up: { opacity: 0, y: 40 },
      down: { opacity: 0, y: -40 },
      left: { opacity: 0, x: 40 },
      right: { opacity: 0, x: -40 },
    };
    return states[direction];
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
