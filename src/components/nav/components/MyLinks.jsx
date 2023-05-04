import "./myLinks.scss" ;
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillCodepenCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className='links'>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <a href="https://www.linkedin.com/in/abubakr-farah-579177211" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="https://github.com/abubkar-ahmed" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </a>
      </motion.span>

    </div>
  );
};