import React from 'react'

import {
  BuyOnline,
  Contact,
  Footer,
  Home,
  Navbar,
  PopularProducts,
  Reviews,
  ScrollToTop,
  Shopping,
} from "./components";

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Home />
      <PopularProducts />
      {/* <Shopping />
      <BuyOnline />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollToTop /> */}
    </div>
  )
}

export default App