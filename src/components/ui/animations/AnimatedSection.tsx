import { ReactNode, RefObject } from "react";
import { AnimationControls, motion, Target, TargetAndTransition, VariantLabels, Variants } from "framer-motion";

// Animation variants for different animation styles
export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const zoomIn = (delay: number = 0, scale: number = 0.85): Variants => {
  return {
    hidden: {
      scale,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const slideIn = (direction: "up" | "down" | "left" | "right", type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls;
  whileInView?: TargetAndTransition | VariantLabels;
  whileHover?: TargetAndTransition | VariantLabels;
  viewport?: {
    root?: RefObject<Element>;
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
  };
  transition?: object;
  /** Optional ID for the section */
  id?: string;
  /** Optional tag to render. Defaults to div */
  as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  variants,
  initial = "hidden",
  animate,
  whileInView = "show",
  whileHover,
  viewport = { once: true, amount: 0.25 },
  transition,
  id,
  as = "div",
  ...props
}) => {
  return (
    <motion.div
      id={id}
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      whileInView={animate ? undefined : whileInView}
      whileHover={whileHover}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
