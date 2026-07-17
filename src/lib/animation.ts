export const defaultTransition = { duration: 0.64, ease: [0.16, 1, 0.3, 1] };

export const heroContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const stagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.05,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 1, y: 18 },
  show: { opacity: 1, y: 0, transition: defaultTransition },
};

export const scaleIn = {
  hidden: { opacity: 1, y: 14, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: defaultTransition },
};
