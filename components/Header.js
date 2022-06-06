import Image from 'next/image';
import React from 'react';

export default function  () {
  return (
    <div> 
        {/* Left */}
        <div className='flex items-center justify-between max-w-7xl'>
            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
                layout='fill'
                className='object-contain'
                />
            </div>
            <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" 
                layout='fill'
                className='object-contain'
                />
            </div>
            <h1>sağ taraf</h1>
        </div>
        
        {/* Middle */}
        {/* Right */}
    </div>
  )
}
