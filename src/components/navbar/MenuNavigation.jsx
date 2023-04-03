import React, { useState } from "react";
import {motion, stagger} from "framer-motion";
import {BsXLg, BsChevronDown, BsArrowRightShort} from "react-icons/bs";
import {menuDatas} from "../../Data/Data";

const MenuNavigation = ({menuToggle, setMenuToggle}) => {

  const [activeData, setActiveData] = useState(null)

  const handleClick = (id) => {
    setActiveData(id === activeData ? null : id)
  }

  const [isContactButtonClick, setisContactButtonClick] = useState(false)
  const handleContactClick = () => {
    setisContactButtonClick(true)
    navigator.clipboard.writeText('123-456-7890')

    setTimeout(()=> {
      setisContactButtonClick(false)
    }, 1000)
  }

  return (
    <motion.div
      initial={menuToggle ? {x: -100, opacity: 0} : {x: -10, opacity: 0}}
      animate={menuToggle ? {x: -10, opacity: 1} : {x: -100}}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className={`${
        menuToggle
          ? "fixed z-20 h-full top-0 left-0 w-[20rem] bg-white shadow-2xl rounded-tr-lg rounded-br-lg p-8 overflow-hidden xs:[23rem] transition-opacity"
          : null
      }`}
      style={{display: menuToggle ? null : "none"}}>
      <div className="menu flex items-center justify-between">
        <div className="minim text-xl font-semibold">minim</div>
        <div
          onClick={() => setMenuToggle(false)}
          className="menuX w-8 h-8 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
          <BsXLg />
        </div>
      </div>
      <div className="menuDatas py-8 select-none">
        {menuDatas.map((menuData, id) => {
          return (
            <div className="dataGroup py-4" key={menuData.id}
            onClick={() => handleClick(id)}
            >
              <div className="dataGroupName flex items-center justify-between">
                <div>{menuData.dataGroupName}</div>
                <BsChevronDown
                className={`${id === activeData ? 'rotate-180' : 'rotate-0'} transition-all duration-500 ease-out`}
                />
              </div>

              {id === activeData && (
                <motion.div
                animate="show"
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                    }
                  }}
                className="dataItems flex flex-col gap-5 mt-4">
                  {menuData.dataItems.map ((dataItem, index) => (
                    <a href=""
                    key={index}
                    className="text-[#df3b3b] hover:underline"
                    >
                      <ul>
                      <li className="">
                      {dataItem}
                      </li>
                      </ul>
                    </a>
                    ))}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
      <div className="callUs flex items-center justify-center bg-black text-white py-2 px-6 uppercase rounded-md cursor-pointer hover:bg-white hover:text-black hover:ring-2 hover:ring-black"
      onClick={handleContactClick}
      >
        {isContactButtonClick ? 'phone number copied' : 'contact us'}
      </div>
      <div className="openHours font-light uppercase text-sm flex flex-col justify-center text-center pt-8 items-center text-gray-400">
        <p>operating hours</p>
        <p className="flex items-center">
        9:00am <span><BsArrowRightShort/></span> 7:30pm
        </p>
      </div>
    </motion.div>
  );
};

export default MenuNavigation;
