import React from 'react'

const Started = () => {
  return (
    <section className=' flex justify-center'>
        <div className=' border-[#5d77d6] flex flex-col gap-2 py-[15px] px-4 sm:px-[6rem] w-[90%] sm:w-[73%] sm:text-center 
         items-center bg-[#4066ff] rounded-[10px] border-[6px] border-solid'>
            <h2 className=' text-white font-bold text-xl'>Getting started with Homyz</h2>
            <h3 className=' text-[0.75rem] text-white mb-4 font-semibold'>
                Subscribe and find super attractive price quotes from us. <br className=' hidden sm:block'/> Find your residence soon</h3>
            

            <button className=' border-2 border-solid px-2 py-[4px] rounded-md text-white'>
                Get started
            </button>
            

        </div>

    </section>
  )
}

export default Started 