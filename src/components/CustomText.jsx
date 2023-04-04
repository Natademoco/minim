import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';

export const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    className='font-light absolute uppercase bottom-5 left-5 text-black'
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`text-[40px] mt-[8px] md:text-[64px] text-white font-bold`}
  >
    {title}
  </motion.h2>
);