import React from 'react'
import { Link } from 'react-router-dom';
import { IoLocation } from 'react-icons/io5';
import { FaPhoneSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniHomeModern } from "react-icons/hi2";

const Footer = () => {
  return (
      <div className="row me-3">
    <div className="col-lg-3 text-align-center p-3 my-3">
      <h2 className="fw-normal text-warning"><HiMiniHomeModern/>
      </h2> 
      <p className="text-dark">Some representative  content .</p>
    </div>
    <div class="col-lg-3 text-align-center p-3 my-3">
      <h2 class="fw-normal">Discover</h2>
      <ul class="listing">
        <li><Link to="/home" class="card-link text-dark" target="_blank">Home</Link></li>
        <li><Link to="/home" class="card-link text-dark " target="_blank"> 
        About</Link></li>
        <li><Link to="/tours" class="card-link text-dark" target="_blank">Man
            Tour</Link></li>
      </ul>
</div>
      <div className="col-lg-3 text-align-center p-3 my-3">
<h2 className="fw-normal">Quick Link</h2>
<ul className="list-style-none">
  <li><Link to="/gallery" class="card-link "
      target="_blank">Gallery</Link></li>
  <li><Link to="/login" class="card-link text-dark"
      target="_blank">Login</Link></li>
  <li><Link to="/register" class="card-link text-dark"
      target="_blank">Register</Link></li>
</ul>

</div>
    <div class="col-lg-3 text-align-center p-3 my-3">
      <h2 class="fw-normal">Contact</h2>
      <ul class="list-style-none">
        <li className='card-style1'><IoLocation /><a href="#" className="card-link" target="_blank">
            Address: Hethur, Sakleshpura, Hassan</a></li>
        <li className='card-style2'><FaPhoneSquare /><a href="#" className="card-link text-dark" target="_blank">
            Phone: +91 9380850133</a></li>
         <li className='card-style3'><HiOutlineMail /><a href="#" className="card-link text-dark" target="_blank">email: vinodithahm1997@gmail.com</a></li>
        {/*<li><a href="#" class="card-link text-secondary text-decoration-none list-style-none" target="_blank">Rubber
            made Toy</a></li> */}
      </ul>
    </div>
  </div> 
  )
}

export default Footer;
