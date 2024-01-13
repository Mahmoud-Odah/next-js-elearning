import React from 'react'
import './style.scss'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn   } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-items'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Terms and Conditions</Link>
            <Link href={'/'}>privacy policy </Link>
        </div>
        <div className='footer-icons'>
            <p><FaFacebookF/></p>
            <p><FaInstagram/></p>
            <p><FaWhatsapp/></p>
            <p><FaLinkedinIn/></p>
        </div>
        <div className='footer-copyRight'>
            <p>All rights reserved to Sorbonne 2024 ©</p>
        </div>
    </div>
  )
}

export default Footer