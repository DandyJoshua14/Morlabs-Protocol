import React from 'react'
import Image from 'next/image'

const Whitelogo = () => {
  return (
    <div className='left-10 flex items-center'>
      <Image 
        src="/whitelogo.png" 
        alt="Morlabs Protocol" 
        width={100} 
        height={20} 
        className='object-contain md:w-[150px] md:h-[30px]' 
      />
    </div>
  )
}

export default Whitelogo
