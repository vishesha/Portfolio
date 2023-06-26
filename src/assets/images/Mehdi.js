import * as React from "react";
import { motion } from "framer-motion";

const container = {
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

const text = {
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

const char = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const VisheshaSadu = (props) => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <motion.div variants={text} initial="hidden" animate="visible" {...props}>
        {Array.from("Vishesha Sadu").map((char, index) => (
          <motion.span key={index} variants={char}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default VisheshaSadu;
