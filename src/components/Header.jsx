import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { HandymanOutlined } from '@mui/icons-material';
import MenuLink from './MenuLink';
import { orange } from '@mui/material/colors';


let menuLinks =[
  {id:1,name:"Home",link:'/'},
  {id:2,name:"My Batch",link:'/mycourses'},
  {id:3,name:"Courses",link:'/courses'},
  
];


export default function Header() {

  const [isOpen,setIsOpen]=useState(false)
  
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="  bg-white border-gray-200 px-2 md:px- py-2.5">
                <div className=" flex flex-wrap justify-between items-center mx-auto md:max-w-screen-xl">
                <div className='md:hidden absolute right-4 '>
                     <button onClick={()=>setIsOpen(!isOpen)}><MenuIcon sx={{ fontSize: 35, color:orange[900] }}/></button>
                  </div> 
                    
                    <Link to="/" className=" flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr- h-12"
                            alt="Logo"
                        />
                    </Link>
                   
                    <div
                        className="  md:z-auto right- flex flex-col md:flex-row  items-start md:items-center w-ful  md:w-auto "
                        id="mobile-menu-2"
                    >
                      <ul className={`p-5 w-60  md:h-auto md:w-auto absolute right-0 ${isOpen?'top-0':'top-[-290px] '} transition-all duration-500 ease-in-out bg-white md:z-auto z-[-1] md:static flex flex-col items-center mt-4 font-medium md:flex-row md:space-x-8 md:mt-0`}>
                           {
                            menuLinks.map((e)=>{
                              return <li className='my-3 '><MenuLink key={e.id} to={e.link} name={e.name}/></li> 
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
        </header>
    );
}