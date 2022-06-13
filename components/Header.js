import { useState, useEffect } from 'react'; 
import {useTheme} from 'next-themes';
import Image from 'next/image';
import React from 'react';
import { MoonIcon, SearchIcon, SunIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

export default function  () {
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <SunIcon
                 className="w-7 h-7"
                 role="button"
                  onClick={() => setTheme
                ('light')} />
        
            
            );
    }    else {
        return (
            <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme
            ('dark')} />
    
        );
    }
}

  return (
      

      
   
        <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
        <div className='flex items-center justify-between max-w-7xl mx-4 xl:mx-auto'>
            {/* Left */}
            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
                layout='fill'
                className='object-contain '
                />
            </div>
            <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" 
                layout='fill'
                className='object-contain'
                />
            </div>
            {/* Middle */}
            <div className='relative mt-1'>
                <div className='absolute top-2 left-2'>
                    <SearchIcon className='h-5 text-gray-500'/>
                </div>
                <input type="text" placeholder= "Search" className='bg-gray-50 pl-11 border-gray-500 text-sm focus:ring-black focus:border-black rounded' />
            </div>
             {/* Right */}
            <div className='flex space-x-4 items-center'>
                <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                <img src='https://pbs.twimg.com/profile_images/1416435456468729865/G578oM3C_400x400.jpg' alt='user-image' className='h-10 rounded-full cursor-pointer' />
            </div>
            

            <header className='border-b border-gray-100 dark:border-gray-700'>
                <div className='container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center'/>
                    
                    

                    {renderThemeChanger()}
                    
                    
                    </header>
        </div>
        
        </div>
        
       
        
        
       
   
  )
}
