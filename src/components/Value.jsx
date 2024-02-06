import React from 'react'
import { Accordion,
    AccordionItemHeading, 
    AccordionItemButton,
     AccordionItemPanel, AccordionItem } from 'react-accessible-accordion'

import valueEmg from '../assets/value.png'
import data from '../utils/Accordion'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion } from 'framer-motion';

const Value = () => {
  return (
    <section className=' w-full flex flex-col sm:flex-row justify-center sm:gap-x-8 items-center py-9 sm:py-[3rem] px-[2rem]'>
        <div className=' flex-1 flex justify-center mb-6 sm:mb-0'>
            <motion.div
            initial={{x:-200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{ease:"easeInOut", duration:1}}
            className=' w-[15rem] h-[20rem] md:w-[20rem] md:h-[25rem] overflow-hidden 
            ash border-8 border-solid rounded-tl-[15rem] rounded-tr-[15rem]'>
                <img src={valueEmg} alt='valueImg'/>
            </motion.div>
        </div>
        <div className=' flex-1 gap-2 flex flex-col'>
            <motion.h2
            initial={{x:200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{ease:"anticipate"}}
            className=' text-orange-500 text-2xl font-bold'>Our Value</motion.h2>
            <motion.h2
            initial={{x:200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{ease:"anticipate", delay:0.3}}
            className=' text-3xl text-[#1f3e72] font-semibold'>Value we give to You</motion.h2>
            <motion.p
             initial={{x:200, opacity:0}}
             whileInView={{x:0, opacity:1}}
             transition={{ease:"anticipate", delay:0.5}}
            >We always ready to help by providing the best services for you.<br />
            <span>We believe a good place to live can make your life better</span>
            </motion.p>

            <Accordion
            className=''
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                {data.map((item, i) =>{
                    return(
                        <AccordionItem
                       
                        key={i} className=' border-[0.8px] mb-2 mt-5 border-solid rounded-[8px] overflow-hidden w-full sm:w-full lg:w-3/4'>
                            <AccordionItemHeading className=''>
                                <AccordionItemButton className=' flex justify-between cursor-pointer w-full p-3 items-center'>
                                    {/* <AccordionItemState>
                                        {({expanded})=> expanded?}
                                    </AccordionItemState> */}
                                    <div className=' p-2 rounded-[5px] bg-[#eeeeff] text-[#4066ff]'>
                                        {item.icon}
                                    </div>
                                    <p className=' text-[16px] px-1 sm:px-0 text-center sm:text-lg text-[#1f3e72] font-semibold'>{item.heading}</p>
                                    <span className=' p-1 rounded-[5px] bg-[#eeeeff]'>
                                    <MdOutlineArrowDropDown  size={20}/>
                                    </span>
                                    
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className=' text-[12px] px-3'>{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    </section>
  )
}

export default Value