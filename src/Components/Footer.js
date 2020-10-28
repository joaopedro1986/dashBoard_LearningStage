import React from 'react'
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer () {
    const sizeIcon = '25px'
    return (
        <footer className="footerReports">
               <FaIcons.FaFacebookMessenger size={sizeIcon} />
               <FaIcons.FaFacebookF size={sizeIcon} />
               <AiIcons.AiFillInstagram size={sizeIcon} />
               <FaIcons.FaWhatsapp size = {sizeIcon} />
           </footer>
    )
}

export default Footer