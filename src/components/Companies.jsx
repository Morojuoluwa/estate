import { motion } from 'framer-motion'
import emg1 from '../assets/prologis.png'
import emg2 from '../assets/tower.png'
import emg3 from '../assets/equinix.png'
import emg4 from '../assets/realty.png' 

const Companies = () => {
  return (
    <section>
        <motion.div
                    initial={{y:200, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:1, type:"spring", delay:0.2}}
        
        className=' sm:flex grid grid-cols-2 place-items-center sm:flex-row gap-y-4 sm:justify-around py-10 sm:items-center bg-white'>
            <img
            className=' w-[8rem]' src={emg1} alt='compEmg'/>
            <img
            className=' w-[9rem]' src={emg2} alt='compEmg'/>
            <img className=' w-[9rem]' src={emg3} alt='compEmg'/>
            <img className=' w-[9rem]' src={emg4} alt='compEmg'/>

        </motion.div>
    </section>
  )
}

export default Companies