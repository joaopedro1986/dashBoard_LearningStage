import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData} from './SideBarData'
import './NavBar.css'
import {IconContext} from 'react-icons';




function NavBarBt() {

    const [sidebar, setSidebar] = useState (false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className = 'navbarBt'>
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
           <a class="navbar-brand" href="#">DashBoard</a>
           <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              {SidebarData.map((item, index) => {
                  return (
                       <li class="nav-item active">
                    <a class="nav-link" href="#">
                    <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                    </Link>
                        <span class="sr-only">(current)</span></a>
                </li>
                  )
              })} 
               
                
             </ul>
           

           </div>

       </nav>
        </div>
  
    )
}



export default NavBarBt