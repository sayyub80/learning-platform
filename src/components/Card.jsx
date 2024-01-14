import React from 'react'

function Card(props) {
  return (
    <div className='flex justify-center md:justify-normal py-6 md:py-1 px-8 md:px-0'>
       <div className=' flex-col md:flex-row flex  md:w-[100%] cursor-pointer  border-1 shadow-[0_3px_20px_rgba(0,0,0,0.3)]  rounded-xl '>
           <div className='mx-auto w-[370px] md:w-[400px] flex items-center md:h-[240px] p-3'>
              <img className='rounded-xl h-full' src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/ecf8833b-a333-40fb-a399-61ba2d7db877.png" alt="img" />
           </div>

           <div className=' mt-1 md:mt-0 md:w-[800px] pl-4 md:pl-7 md:pt-4 flex flex-col content-around '>
             <div className='mb-3 text-3xl font-semibold'>
              <h1>{props.courseName}</h1>
             </div>
             
            <div className='mb-3'>
               <p className='font-bold'>100+</p>
               <p className='text-gray-500 font-semithin '>LECTURES</p>
            </div>
              
             <div className='mt-5 '>
               <div>
                  <p className='text-sm font-semibold  '>Special Discount Price</p>
               </div >
                <div className='flex items-center relative pb-20 md:pb-0'>
                 <p className='font-bold text-2xl'>Rs {props.price}</p>
                 <p className='mx-7 text-gray-500 line-through'>Rs{props.orgPrice}</p>
                 <p className='bg-[#46b284] rounded-3xl px-2 py-1 text-white'>{props.discount}OFF</p>
                <button className='absolute bottom-5 md:bottom-0   md:right-2 shadow-[0_4px_5px_rgba(0,0,0,0.3)] bg-[#0d6efd]  text-white px-8 py-2 rounded  duration-500 hover:scale-105'>Explore</button>
                  
                </div>
                 
             </div>
            
             
           </div>
           
            
          
       </div>
    </div>
  )
}

export default Card
