import React from 'react'
import Card from './card';

 function Courses() {
  return (
    <>
    <div className=" h-screen ">
         <div className='p-5 bg-black md:px-[120px] text-white md:mb-6 md:pb-6'>
         <h1 className=" font-medium mb-3 md:mb-0 text-3xl md:text-5xl md:py-9 md:font-medium">UPSC ONLINE COACHING</h1>
         <p className='text-xs'>UPSC Online Coaching is an excellent choice for those aspiring to crack the prestigious UPSC exam. The UPSC Online Coaching Program at Physics Wallah is designed to provide students with the finest and most cost-effective courses. Our expertise and guidance provide students with a solid foundation and a strategic approach to tackle the challenges of the UPSC examination.</p>
         </div>

         <div className='mx-auto md:max-w-screen-xl'>
            <Card courseName="Unlimated IAS Course 2025"
                  price="5000"
                  orgPrice="10000"
                  discount="50%"/>
         </div>
            
        </div>
  
    </>
    )    
}

export default Courses;