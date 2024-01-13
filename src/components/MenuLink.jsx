import React from 'react'
import { NavLink } from 'react-router-dom';

function MenuLink(props) {
 
  return (
    <>
        <NavLink key={props.key} to={props.to}  className={({isActive}) =>
                        `  md:my-0  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`}
               >{props.name}
        </NavLink>
                
    </>
  )
}

export default MenuLink;







