import React from 'react'
import './footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
   <>
  <footer>
 <div className="container">
 <div className="footer-one">
      <ul>
        <li>Blogs</li>
        <li>FaQs</li>
        <li>Contact Us</li>
      </ul>
      <div className="fot-icon">
      <FaFacebookF />
      <FaTwitter />
      <IoLogoInstagram />
      <FaPinterest />
      </div>
    </div>
 </div>
  </footer>
   </>
  )
}

export default Footer