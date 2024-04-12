import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs
            </h3>
            <p
            className='text-primary/75 tex-base mb-4'>
            Contact us to get free consultation and know about the job suitable for you
            </p>
            <div className='w-full space-y-4'>
                <input type="email" name="email" id="email" placeholder='name@gmail.com' 
                className='w-full block py-2 pl-3 border focus:outline-none'/>
                <input type="submit" value={"Subscribe"}
                className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-demibold' />
            </div>

            
        </div>

        {/* second part */}
        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get noticed faster
            </h3>
            <p
            className='text-primary/75 tex-base mb-4'>
            Contact us to get free consultation and know about the job suitable for you
            </p>
            <div className='w-full space-y-4'>
                <input type="email" name="email" id="email" placeholder='name@gmail.com' 
                className='w-full block py-2 pl-3 border focus:outline-none'/>
                <input type="submit" value={"Subscribe"}
                className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-demibold' />
            </div>

            
        </div>
    </div>
  )
}

export default Newsletter