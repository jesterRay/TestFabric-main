export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

// export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', type, delay, duration): { hidden: { x; y }; show: { x; y; transition: { type; delay; duration; ease } } } => ({
//   hidden: {
//     x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
//     y: direction === 'up' ? 100 : direction === 'down' ? 100 : 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: 'easeOut',
//     },
//   },
// });

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ?100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
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
      ease: 'easeOut',
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
    opacity:0,
  },
  show: {
    opacity:1,
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0.75,
    opacity:0.9,
    zIndex:-1,
    
  },
  show: {
    scale: 1,
    opacity: 1,
    zIndex:2,
    transition: {
      type: 'spring',
      stiffness: 80,
      // velocity: 10,
      delay,
      duration,
      // ease: 'easeOut',
      // 
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const transitionIn = {
  // show:{
  //   opacity: 1,
  //   y: 0,
  //   transition: {
  //     type: 'spring',
  //     stiffness: 80,
  //     delay: 5,
  //   },
  // }
  equalyDivide:{
    width:"50%",
    scale: 1,
  },
  hide:{
    // with:"0%",
    // scale:1,
    // transition: {
    //   type: 'spring',
    //   stiffness: 80,
    //   // velocity: 10,
      
    //   delay:0.2,
    //   duration:1.5,
    //   // ease: 'easeOut',
    //   // 
    // },
  },
  expand: {
    scale: 1.5,
    opacity: 1,
    zIndex:2,
    // position:"absolute",
    width:"100%",
    transition: {
      type: 'spring',
      stiffness: 80,
      // velocity: 10,
      
      delay:0.2,
      duration:1.5,
      // ease: 'easeOut',
      // 
    },
  },
   
  // },
};
