
import { Link } from 'react-router-dom'
import lorgo from "../assets/logo.png"
import { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { motion } from 'framer-motion';


const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleBtn = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <section className=' z-50 top-0 sticky primary text-white '>
        <div className=' flex py-4 justify-between items-center flex-wrap gap-x-2 px-2 sm:px-3 md:px-6 w-full max-2xl:max-w-[1280]'>
            <motion.img
            initial={{x:-200}}
            animate={{x:0}}
            transition={{type:"tween", duration:1,}}
            src={lorgo} width={100}/>
            <motion.div
                            initial={{ y:-100, opacity:0}}
                            animate={{ y:0, opacity:1}}
                            transition={{duration:1, ease:"easeIn"}}
            
            
            className=' gap-8 hidden md:flex justify-center items-center flex-wrap'>
                <Link
                to="">Residencies</Link>
                <Link to="">Our Values</Link>
                <Link to="">Contact Us</Link>
                <Link to="">Get Started</Link>
                <button className=' bg-blue-600 py-1 px-2 rounded'>
                     <Link to="">Contact</Link>
                </button>
                
            </motion.div>
            <button onClick={toggleBtn} className=' md:hidden'>
              {isOpen? <HiX className=' w-[2rem] h-[2rem]'/> : <HiMenuAlt3 className=' w-[2rem] h-[2rem]'/>}
            </button>

            {isOpen &&(
              <div className=' gap-8 h-full flex flex-col basis-full mt-4 justify-center items-center flex-wrap'>
                <Link to="">Residencies</Link>
                <Link to="">Our Values</Link>
                <Link to="">Contact Us</Link>
                <Link to="">Get Started</Link>
                <button className=' bg-blue-600 py-1 px-2 rounded'>
                    <Link to="">Contact</Link>
                </button>
              
              </div>
            )}
        </div>
    </section>
  )
}

export default Header