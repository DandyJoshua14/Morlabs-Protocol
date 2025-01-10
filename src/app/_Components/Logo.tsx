import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='left-10 flex items-center'>
      <Image src="/morlabs-logo.png" alt="Morlabs Protocol" width={150} height={30} className='object-contain md:w-[150px] md:h-[30px]' />
    </div>
  )
}

export default Logo
