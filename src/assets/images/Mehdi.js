// import * as React from "react";
// import { motion } from "framer-motion";

// const container = {
//   hidden: {
//     opacity: 1,
//     scale: 1,
//   },
//   visible: {
//     opacity: 0,
//     scale: 0,
//     transition: {
//       delay: 3.4,
//       duration: 0.3,
//     },
//   },
// };

// const text = {
//   hidden: {
//     opacity: 1,
//   },
//   visible: {
//     opacity: 0.5,
//     transition: {
//       when: "afterChildren",
//       duration: 0.1,
//       delay: 3,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const char = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { opacity: 1, x: 0 },
// };

// const VisheshaSadu = (props) => {
//   return (
//     <motion.div variants={container} initial="hidden" animate="visible">
//       <motion.div variants={text} initial="hidden" animate="visible" {...props}>
//         {Array.from("Vishesha Sadu").map((char, index) => (
//           <motion.span key={index} variants={char}>
//             {char}
//           </motion.span>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default VisheshaSadu;

//responsive

import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  text: {
    display: "flex",
    fontSize: "4vw", // Adjust the font size based on your preference
  },
  char: {
    margin: "0 5px", // Adjust the spacing between characters based on your preference
  },
}));

const containerVariants = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 0,
    scale: 0,
    transition: {
      delay: 3.4,
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0.5,
    transition: {
      when: "afterChildren",
      duration: 0.1,
      delay: 3,
      staggerChildren: 0.2,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const VisheshaSadu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className={classes.text}
        >
          {Array.from("Vishesha Sadu").map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              className={classes.char}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VisheshaSadu;
