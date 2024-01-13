import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { HandymanOutlined } from '@mui/icons-material';
import MenuLink from './MenuLink';

// const [isClicked,setIsClicked] =useState(false);
// function toggleNav(){
//       setIsClicked((prev)=>{
//         return !prev;
//       })
// }


let menuLinks =[
    {id:1,name:"Home",link:'/'},
    {id:2,name:"MyCourses",link:'/mycourses'},
    {id:3,name:"Courses",link:'/courses'},
    
];





function Navbar() {
  return (
    <>  <div className='md:hidden absolute right-1 '>
                     <button><MenuIcon/></button>
                  </div> 
        <nav className=" bg-white border-gray-200 px-2 md:px- py-2.5">
                <div className="  flex flex-wrap justify-between items-center mx-auto md:max-w-screen-xl">
              
                    
                    <Link to="/" className=" flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr- h-12"
                            alt="Logo"
                        />
                    </Link>
                   
                    <div
                        className="  w-full   md:z-auto right-0 flex flex-col md:flex-row  items-start md:items-center w-full  md:w-auto "
                        id="mobile-menu-2"
                    >
                      <ul className="p-5 absolute md:z-auto z-[-1] md:static flex flex-col items-center mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                           {
                            menuLinks.map((e)=>{
                              return <li className='my-2 '><MenuLink key={e.id} to={e.link} name={e.name}/></li> 
                            })
                           } 
  
                    
                           <li  className="my-2 list-none ml-3 text-white bg-orange-700 hover:bg-orange-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 md:py-2.5 mr-2 focus:outline-none"><Link to="#"
                                >Log in
                                </Link>
                           </li>
                           <li  className="my-2 list-none ml-3 text-white bg-orange-700 hover:bg-orange-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 md:py-2.5 mr-2 focus:outline-none"><Link to="#"
                                >Sign Up
                                </Link>
                           </li>
                                
                         </ul>   
                        
                  
         
                    </div>
                   
                </div>
            </nav>
    </>
  )
}

export default Navbar
