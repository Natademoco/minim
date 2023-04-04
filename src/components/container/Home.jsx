import React from 'react'
import { homeImages } from '../../Data/Data'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn} from '../../../utils/motion'
import { TypingText } from '../CustomText'

const Home = () => {
  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    id='home'
    className='container grid gap-4 sm:gap-4 sm:grid-cols-2 md:grid-cols-4 mx-auto max-w-[1060px] py-24 sm:py-32 px-5 sm:px-8'  
    >
      {homeImages.map((homeImg) => {
        return (
          <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          key={homeImg.id}
          className={`${homeImg.bgColor} ${homeImg.layout} flex flex-col items-center justify-center relative rounded-md shadow-md hover:shadow-xl hover:ring-1 ring-[#df3b3b] cursor-pointer`}
          >
            <motion.img
            // whileHover={{ y: -12, scale: 1.1}}
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