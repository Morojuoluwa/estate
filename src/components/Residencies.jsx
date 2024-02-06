import { motion } from 'framer-motion';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'
import { darta } from '../utils/slider';
import { sliderSettings } from '../Connect';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6"
 


const Residencies = () => {
  return (
    <section className=' px-10 sm:px-20'>
      <div className=' overflow-hidden w-full relative'>
        <div className=''>
          <div className=' flex flex-col mb-5 sm:mb-8'>
            <motion.h2
            initial={{x:-200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{type:"spring"}}
            className=' text-[1.5rem] font-semibold text-orange-500'>Best choices</motion.h2>
            <motion.span
            initial={{x:-200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{type:"spring", delay:0.3}}
              className=' text-[#1f3e72] text-[2rem] font-medium'>Popular residencies</motion.span>
          </div>

        </div>
        
        <Swiper className=' w-full'  {...sliderSettings}>
          <SliderButtons/>
          {darta.map((card, index) =>(
            <SwiperSlide  key={index}>
              <div className='gap-[0.6rem] kard flex justify-center mt-5 flex-col items-center sm:items-start p-4 rounded-xl max-w-max'>
                <img className=' w-full max-w-[300px]' src={card.image} alt='home'/>
                <h3 className=' text-xl font-semibold'>
                  <span className=' text-orange-500 text-xl'> &#8358;</span>{card.price}
                </h3>
                <h3 className=' text-[#1f3e72] text-2xl font-semibold'>{card.name}</h3>
                <p className=' text-[0.9rem]'>{card.detail}</p>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  )
}

export default Residencies

const SliderButtons = () =>{
  const swiper = useSwiper()
  return(
    <div className='flex gap-4 absolute z-10 top-0 right-4 sm:right-28'>
      {/* <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button> */}
      <FaAnglesLeft onClick={()=> swiper.slidePrev()}/>
      <FaAnglesRight onClick={() => swiper.slideNext()}/>
    </div>
  )
}