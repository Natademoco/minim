import React, { useState } from 'react'
import { style } from '../../styles'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Products = ({ img, price, name, color }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false)

  const handleHeartClicked = () => {
    setIsHeartClicked(!isHeartClicked)
  }

  return (
    <motion.div
    whileHover={{ y: -5 }}
    className={`${style.container} relative hover:shadow-md`}>
      <img
        src={img}
        alt={name}
        className={`${color} product py-[2rem] px-[1rem] object-cover w-[30rem] h-[15rem] rounded-tl-xl rounded-tr-xl`}
      />
      <div className={`${color} nameAndPrice p-6 shadow-lg rounded-bl-xl rounded-br-xl`}>
        <div className='name mb-2'>
          {name}
        </div>
        <div className='price absolute top-5 left-5 text-md'>
          {price}
        </div>
        <div className='btn'>
          <button className='bg-white py-1 px-3 text-sm rounded-xl font-light hover:bg-black hover:text-white'>Add To Cart</button>
        </div>
        <div>
          {isHeartClicked ? (
            <HiHeart
              className='absolute right-5 top-5 text-2xl cursor-pointer'
              onClick={handleHeartClicked}
            />
          ) : (
            <HiOutlineHeart
              className='absolute right-5 top-5 text-2xl cursor-pointer'
              onClick={handleHeartClicked}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Products