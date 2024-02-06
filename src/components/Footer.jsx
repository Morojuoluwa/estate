import React from 'react'
import footEmg from '../assets/logo2.png'

const Footer = () => {
  return (
    <section className='flex justify-center items-center'>
        <div className=' flex flex-col sm:flex-row sm:justify-between items-center p-2 w-full sm:w-[73%]'>
            <div className='flex flex-col mb-2 items-center sm:items-start'>
                <img src={footEmg} alt='footer-img' width={120}/>
                <h3 className=' text-start'>Our vision is to provide the best <br/> homes for our customers</h3>

            </div>
            <div className=' flex flex-col items-center sm:items-start'>
                <h2 className=' text-xl text-[#4a68e1] font-semibold'>Information</h2>
                <h3 className=''>obatola avenue,egbeda, lagos</h3>

                <div className=' flex justify-center gap-x-2'>
                    <h3>Products</h3>
                    <h3>Services</h3>
                    <h3>Property</h3>
                    <h3>About Us</h3>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Footer