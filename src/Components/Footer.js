import React from 'react'
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Footer.css'

function Footer () {
    const sizeIcon = '100px'
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