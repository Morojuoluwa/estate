import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import heroImg from '../assets/hero-image.png'
import CountUp from 'react-countup';
import Companies from './Companies';
import Residencies from './Residencies';
import Value from './Value';
import Contact from './Contact';
import Started from './Started';
import Footer from './Footer';

const Hero = () => {
  return (
    <>
        <section className=' text-white primary relative '>
            <div className='w-full max-2xl:max-w-[1280] px-2 sm:p-10 md:px-10 lg:px-20 flex justify-center md:flex-row md:justify-between md:gap-x-8 lg:gap-x-0 items-center max-md:flex-wrap'>
                <div>
                    <div className=' relative z-[1] mb-3 sm:mb-0'>
                         <div className=' hidden lg:block lg:right-[7rem] lg:top-[0.85rem] sm:h-[2rem] h-[1.5rem] w-[1.5rem] sm:w-[2rem] -z-[1] rounded-full absolute bg-orange-400'/>
                        <motion.h1
                        initial={{x:200, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{ease:"easeInOut", delay:0.3, duration:1}}
                        className=' font-semibold text-[2rem] px-3 sm:px-0  sm:text-[3.5rem] md:text-[2.5rem] lg:text-[3.5rem] -z-40'>
                            
                             Dicsover the <br/>
                              Most suitable <br/> property
                        </motion.h1>
                    </div>
                    <motion.div
                    initial={{x:-300, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{delay:0.35, duration:1, ease:"easeInOut"}}
                    className=' flex py-2 px-3 sm:px-0  flex-col justify-center mb-4 sm:mb-0 items-start'>
                        <span className=' text-[15px] sm:text-[20px]'>Find a variety of properties that suits you very easily.</span>
                        <span className=' text-[15px] sm:text-[20px]'>Forget all difficulties in finding a residence for you.</span>
                    </motion.div>
                    <motion.div
                    initial={{x:-300, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{delay:0.45, duration:1,  ease:"easeInOut"}}
                    className=' px-3 sm:px-0'>
                        <div className=' flex  mx-auto items-center mt-3 overflow-hidden bg-white px-[15px] sm:px-[2rem] py-[0.5rem] rounded-md justify-between'>
                            <HiLocationMarker className='text-blue-600 w-6'/>
                            <input type="text" className='outline-none text-black' />
                            <button className=' px-2 py-1 bg-blue-600 '>search</button>
                        </div>
                    </motion.div>

                    <div className=' flex justify-between w-full px-3 sm:px-0 mb-6 items-center mt-5'>
                        <div className=' flex flex-col '>
                            <span className=' flex items-center'>
                                <CountUp className=' text-xl sm:text-2xl font-semibold' start={8800} end={9000} duration={4}/>
                                <span className=' text-lg text-orange-500'>+</span>     
                            </span> 
                            <h2 className=' text-slate-400 text-[10px]'>premium products</h2>
                            

                        </div>

                        <div className=' flex flex-col'>
                            <span className=' flex items-center'>
                                <CountUp className=' text-xl sm:text-2xl font-semibold' start={1800} end={2000} duration={4}/>
                                <span className=' text-lg text-orange-500'>+</span>     
                            </span> 
                            <h2 className=' text-slate-400 text-[10px]'>Happy customer</h2>
                            

                        </div>

                        <div className=' flex flex-col '>
                            <span className=' flex justify-center items-center'>
                                <CountUp className=' text-xl sm:text-2xl font-semibold ' start={0} end={28} />
                                <span className=' text-lg text-orange-500'>+</span>     
                            </span> 
                            <h2 className=' text-slate-400 text-[10px]'>Awards wining</h2>
                            

                        </div>
                    </div>
                </div>
            

                <div className=' flex justify-center items-center px-3 sm:px-0 flex-wrap mb-6 sm:mb-0'>
                    <motion.div
                     initial={{opacity:0}}
                     animate={{opacity:1}}
                     transition={{duration:2, ease:"easeInOut"}}
                    className=' w-[15rem] h-[20rem] sm:w-[20rem] sm:h-[25rem] overflow-hidden
                     ash border-8 border-solid border-s  rounded-tl-[15rem] rounded-tr-[15rem]'>
                        <img
                        className=' w-full h-full' src={heroImg} alt='hero-img'/>
                    </motion.div>

                </div>

            </div>
        </section> 
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <Started/>
        <Footer/>
    </>
  ) 
}

export default Hero