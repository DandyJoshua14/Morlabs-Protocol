import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='left-10 flex items-center'>
      <Image src="/morlabs-logo.png" alt="Morlabs Protocol" width={150} height={30} className='object-contain' />
    </div>
  )
}

export default Logo
