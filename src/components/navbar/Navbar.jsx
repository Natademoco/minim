import {useState, React} from "react";
import {FiSearch} from "react-icons/fi";
import {HiMenuAlt4, HiOutlineShoppingBag} from "react-icons/hi";
import MenuNavigation from "./MenuNavigation";
import {motion} from "framer-motion";
import {navVariants, staggerContainer} from "../../../utils/motion";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <div className="header fixed w-full top-0 left-0 z-10">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="container p-6 flex items-center justify-between mx-auto sm:p-12 max-w-[1060px]">
          <div className="menuSearch flex items-center">
            <div
              className="menu_icon w-8 h-8 bg-black rounded-[50%] text-white flex items-center justify-center cursor-pointer mr-6 sm:mr-20"
              onClick={() => setMenuToggle(true)}>
              <HiMenuAlt4 />
            </div>
            <FiSearch className="cursor-pointer text-xl" />
          </div>
          <div className="logo font-semibold text-2xl cursor-pointer">
            minim
          </div>
          <div className="accountAndCart flex items-center">
            <a
              href=""
              className="text-black uppercase text-sm font-medium mr-6">
              account
            </a>
            <HiOutlineShoppingBag className="text-2xl cursor-pointer" />
          </div>
        </motion.nav>
      </div>
      <MenuNavigation setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
    </>
  );
};

export default Navbar;
