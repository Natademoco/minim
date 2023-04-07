import React from 'react'
import { homeImages } from '../../Data/Data'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn} from '../../../utils/motion'
import { TypingText } from '../CustomText'
import { style } from '../../styles'

const Home = () => {
  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    id='home'
    className={`${style.section} ${style.container} grid gap-4 sm:gap-4 sm:grid-cols-2 md:grid-cols-4 mt-[3.5rem] sm:mt-[5rem]`}  
    >
      {homeImages.map((homeImg) => {
        return (
          <motion.div
          whileHover={{ scale: 1.001 }}
          variants={fadeIn('up', 'tween', 0.2, 1)}
          key={homeImg.id}
          className={`${homeImg.bgColor} ${homeImg.layout} flex flex-col items-center justify-center relative rounded-md shadow-md hover:shadow-lg cursor-pointer`}
          >
            <motion.img
            whileHover={{ y: -12, scale: 1.1}}
            variants={fadeIn('down', 'tween', 0.3, 1)}
            src={homeImg.img} alt={homeImg.name}
            className={`${homeImg.size}`}
            />
            <TypingText title={homeImg.name}/>
          </motion.div>
        )
      })}
    </motion.section>
  )
}

export default Home