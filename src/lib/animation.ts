export const defaultTransition = { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] };

export const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: defaultTransition },
};

export const simpleFloat = {
  animate: {
    y: [0, -12, 0],
    x: [0, 6, 0],
    transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
  },
};
