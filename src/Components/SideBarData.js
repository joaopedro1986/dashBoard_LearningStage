import React from 'react'
import * as FaIcons  from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons  from 'react-icons/io'
import './NavBar.css'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Workers',
        path: '/workers',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    }
]