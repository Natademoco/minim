import React from 'react'
import { style } from '../../styles'
import { products } from '../../Data/Data'
import Products from './Products'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, slideIn} from '../../../utils/motion'
import { TypingText } from '../CustomText'

const PopularProducts = () => {
  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    className={`${style.container} ${style.section} h-full`}>
      <div className="popular_container flex items-center justify-between">
        <motion.div
        variants={slideIn('left', 'tween', 0.5, 1)}
        className={`${style.title}`}>
          Popular <span className={`${style.span}`}>products</span>
        </motion.div>
        <motion.div
        variants={slideIn('right', 'tween', 0.5, 1)}
        className='nextAndPrev flex items-center gap-8 cursor-pointer'>
          <span className='uppercase font-medium text-sm sm:text-md'>prev</span>
          <span className='uppercase font-medium text-sm sm:text-md'>|</span>
          <span className='uppercase font-medium text-sm sm:text-md'>next</span>
        </motion.div>
      </div>
      <motion.div
      variants={fadeIn('up', 'tween', 0.8, 1)}
      className='product_container grid place-items-center gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3'>
        {products.map(product => {
          return <Products key={product.id} {...product}/>
        })}
      </motion.div>
    </motion.section>
  )
}

export default PopularProducts