import React from 'react'
import '../App.css'
import logo from "../assets/logo-4.png"
// import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  return (
    <div className='navbar d-flex justify-content-around align-items-center'>
      <div className="logo d-flex gap-3 align-items-center">
        <img src={logo} alt="" width={"50vw"} />
        <h2 className='fs-4'>Simply Natural</h2>
      </div>
      <div className="nav-content">
        <ul className='d-flex justify-content-around gap-5 align-items-center navbar-ul'>
          <li className='nav-item'><Link className='nav-link' to="home" smooth={true} duration={500} >Home</Link></li>
          <li className='nav-item'><Link className='nav-link' to="store" smooth={true} duration={500} >Store<span className="dropdown-arrow fs-md-5 text-da">▼</span></Link></li>
          <li className='nav-item'><Link className='nav-link' to="about-us" smooth={true} duration={500} >About Us</Link></li>
          <li className='nav-item'><Link className='nav-link' to="about-us" smooth={true} duration={500} >Contact Us</Link></li>
          <li className='nav-item'><Link className='nav-link' to="" smooth={true} duration={500} >My Account</Link></li>
          <div className="icons d-flex justify-content-around gap-2 align-items-center">
            <li className='nav-link fs-5 text-danger'><i class="bi bi-currency-dollar"></i></li>
            <li className='fs-5 nav-link text-danger'>0.00</li>
            <li className='nav-link fs-4 text-danger'><i class="bi bi-bag-fill"></i></li>
          </div>

          <li className='nav-link fs-4'><i class="bi bi-person-fill"></i></li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar