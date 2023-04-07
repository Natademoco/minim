import React from 'react'
import { style } from '../../styles'
import { products } from '../../Data/Data'

const PopularProducts = () => {
  return (
    <section className={`${style.container} ${style.section} h-[100vh]`}>
      <div className="popular_container flex items-center justify-between">
        <div className={`${style.title}`}>
          Popular <span className={`${style.span}`}>products</span>
        </div>
        <div className='nextAndPrev flex items-center gap-8 cursor-pointer'>
          <span className='uppercase font-medium text-sm sm:text-md'>prev</span>
          <span className='uppercase font-medium text-sm sm:text-md'>|</span>
          <span className='uppercase font-medium text-sm sm:text-md'>next</span>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts