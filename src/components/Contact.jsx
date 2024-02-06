import React from 'react'
import conEmg from '../assets/contact.jpg'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section>
        <div className=' w-full flex flex-col-reverse sm:flex-row py-4 sm:py-[3rem] sm:px-8  md:justify-around  px-[2rem] justify-center items-center'>
            <div className=' flex justify-center sm:mr-2 md:mr-0'>
                <div className=' flex flex-col  '>
                    <div className=' flex gap-y-2 flex-col px-3 sm:px-0'>
                        <motion.h2
                        initial={{y:100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{ease:"easeInOut"}}
                        className=' text-orange-500 text-2xl font-semibold'>Our contacts</motion.h2>
                        <motion.h2
                        initial={{y:100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{ease:"easeInOut", delay:0.2}}
                        className=' text-3xl text-[#1f3e72] font-semibold'>Easy to contact us</motion.h2>
                        <motion.h3
                        initial={{y:100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{ease:"easeInOut", delay:0.5}}
                        className=' text-[15px]'>We always ready to help by providing the best services for you. <br/>
                            We believe a goof place to live can make your lide better.</motion.h3>
                    </div>
                    
                    <motion.div
                     initial={{y:50, opacity:0}}
                     whileInView={{y:0, opacity:1}}
                     transition={{ease:"easeInOut", delay:0.5}}
                    className=' mt-7 w-full'>
                        <div className=' flex justify-center sm:justify-start gap-x-3 sm:gap-x-6 sm:mx-0'>
                            <div className=' border-[1px] border-solid border-slate-200 p-2 sm:p-4'>
                                <div className=' flex gap-x-3 mb-3'>
                                    <div  className=' p-2 rounded-[5px] bg-[#eeeeff]'>
                                        <MdCall className=' text-[#4066ff]'/>
                                    </div>
                            
                                    <div>
                                        <h2 className='text-[0.75rem]'>Call</h2>
                                        <p className='text-[0.75rem]'>09059375974</p>
                                    </div>

                                </div>
                                <h3 className=' w-full p-1 bg-[#eeeeff] hover:bg-[#4066ff] hover:text-white text-center text-[0.9rem] text-[#4066ff] font-semibold'>Call now</h3>
                            </div>
                            <div className=' border-[1px] border-solid border-slate-200 p-2 sm:p-4'>
                                    <div className=' flex gap-x-3 mb-3'>
                                        <div className=' p-2 rounded-[5px] bg-[#eeeeff]'>
                                            <BsFillChatDotsFill className=' text-[#4066ff]' style={{ backgroundColor: '#eeeeff'}}/>
                                        </div>
                                        
                            
                                        <div>
                                            <h2 className=' text-[0.75rem]'>Chat</h2>
                                            <p className=' text-[0.75rem]'>09059375974</p>
                                        </div>

                                    </div>
                                    <h3 className=' w-full p-1 bg-[#eeeeff] hover:bg-[#4066ff] hover:text-white text-center text-[0.9rem] text-[#4066ff] font-semibold'>Chat Now</h3>

                                </div>
                        </div>
                        <div className=' flex justify-center sm:justify-start gap-x-3 sm:gap-x-6 sm:mx-0 mt-4' >
                                <div className=' border-[1px] border-solid border-slate-200 p-2 sm:p-4'>
                                    <div className=' flex gap-x-3 mb-3'>
                                        <div className=' p-2 rounded-[5px] bg-[#eeeeff]'>
                                                <BsFillChatDotsFill className=' text-[#4066ff]' style={{ backgroundColor: '#eeeeff'}}/>
                                            </div>
                                            <div>
                                                <h2 className=' text-[0.75rem]'>Video Call</h2>
                                                <p className=' text-[0.75rem]'>09059375974</p>
                                            </div>

                                        </div>
                                    <h3 className=' w-full p-1 bg-[#eeeeff] hover:bg-[#4066ff] hover:text-white text-center text-[0.9rem] text-[#4066ff] font-semibold'>Video Call now</h3>
                                </div>
                                <div className=' border-[1px] border-solid border-slate-200 p-2 sm:p-4'>
                                    <div className=' flex gap-x-3 mb-3'>
                                            <div className=' p-2 rounded-[5px] bg-[#eeeeff]'>
                                                <HiChatBubbleBottomCenter className=' text-[#4066ff]' style={{ backgroundColor: '#eeeeff'}}/>
                                            </div>
                                            
                                
                                            <div>
                                            <link rel="icon" type="image/svg+xml" href="/favicon.ico" />            <h2 className=' text-[0.75rem]'>Message</h2>
                                                <p className=' text-[0.75rem]'>09059375974</p>
                                            </div>

                                        </div>
                                        <h3 className=' w-full p-1 bg-[#eeeeff] hover:bg-[#4066ff] hover:text-white text-center text-[0.9rem] text-[#4066ff] font-semibold'>Message now</h3>

                                    </div>
                            </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
            initial={{x:200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{type:"spring", duration:1}}
            className=' flex justify-center mb-4 sm:mb-0'>
                <div className=' w-[15rem] h-[20rem] md:w-[20rem] md:h-[25rem] overflow-hidden
                     ash border-8 border-solid rounded-tl-[15rem] rounded-tr-[15rem]'>
                    <img src={conEmg} className=' h-full w-full' alt='contact-image'/>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact