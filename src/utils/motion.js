export const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.3,
    },
  },
};

export const titleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const titlePartVariant = (direction) => ({
  hidden: {
    x: direction === "left" ? "-30vw" : "30vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      stiffness: 30,
    },
  },
});

export const descVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      opacity: {
        duration: 1.5,
      },
      duration: 0.4,
    },
  },
};

export const linksContainerVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

export const linksVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeInVariant = {
  hidden: {
    transition: {},
  },
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const contentVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

export const floatImgContainerVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.7,
      staggerChildren: 1.2,
    },
  },
};

export const floatImgVariant = {
  hidden: {
    y: 20,
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1.6,
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};

export const sidebarVariant = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
  },
};
