import { Variants } from "framer-motion";

// Page fade-in animation
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Container animation for staggered children
export const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Item animation for staggered children
export const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Skill card animation
export const skillCardVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

// Experience item animation
export const experienceVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Project card animation
export const projectVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
};

// Section header animation
export const headerVariants: Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Bounce animation for scroll indicator
export const bounceVariants: Variants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Fade in from bottom
export const fadeInFromBottomVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Glow effect
export const glowVariants: Variants = {
  initial: {
    boxShadow: "0 0 0px rgba(168, 85, 247, 0)",
  },
  animate: {
    boxShadow: [
      "0 0 0px rgba(168, 85, 247, 0)",
      "0 0 20px rgba(168, 85, 247, 0.5)",
      "0 0 0px rgba(168, 85, 247, 0)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Spin animation
export const spinVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Pulse animation
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Slide in from left
export const slideInFromLeftVariants: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide in from right
export const slideInFromRightVariants: Variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide in from top
export const slideInFromTopVariants: Variants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Scale and fade button animation
export const buttonVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Floating animation (for floating elements)
export const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotate hover animation
export const rotateHoverVariants: Variants = {
  initial: {
    rotate: 0,
  },
  hover: {
    rotate: 5,
    transition: {
      duration: 0.3,
    },
  },
};

// Underline animation
export const underlineVariants: Variants = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Blink animation
export const blinkVariants: Variants = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Shake animation
export const shakeVariants: Variants = {
  animate: {
    x: [-5, 5, -5, 5, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

// Flip animation
export const flipVariants: Variants = {
  initial: {
    rotateY: 0,
  },
  animate: {
    rotateY: 360,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Timeline container - staggered animation
export const timelineContainerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

// Timeline item animation
export const timelineItemVariants: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

// Timeline dot animation with pulsing glow
export const timelineDotVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.3,
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
    transition: {
      duration: 0.3,
    },
  },
};

// Timeline connecting line animation
export const timelineLineVariants: Variants = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

// Timeline content animation with slide
export const timelineContentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    x: 10,
    transition: {
      duration: 0.2,
    },
  },
};

// Animated timeline progress indicator
export const timelineProgressVariants: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    boxShadow: [
      "0 0 10px rgba(59, 130, 246, 0.3)",
      "0 0 25px rgba(59, 130, 246, 0.8)",
      "0 0 10px rgba(59, 130, 246, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Timeline milestone badge animation
export const timelineBadgeVariants: Variants = {
  initial: {
    scale: 0,
    rotate: -180,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.2,
    },
  },
};
