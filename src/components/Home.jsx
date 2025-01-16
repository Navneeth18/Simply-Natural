import React from 'react'
import backgroundImage from '../assets/bg-iste-1.jpg';
import { TbPlant2 } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";

import Landing from './Landing';
import Navbar from './Navbar';




function Home() {
  return (
    <div className='home-page'>

      {/* <div className="" style={{ position: "absolute" }}><Navbar /></div> */}

      <div className="">
        <div className="image-container">
          <div className="Landing-page">
            <Landing />
          </div>
          <img src={backgroundImage} alt="this is an image" width={"1520vw"} className='rounded-image' />



        </div>
        <div className="d-flex justify-content-around align-items-center mt-5 mb-5">

          <div className="d-flex align-items-center gap-3">
            <span className='fs-1 text-success pb-4'><TbPlant2 /></span>
            <div className="d-flex flex-column">
              <h4>Plant Collection</h4>
              <p>Any plants for your space</p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className='fs-1 text-success pb-4'><FaShippingFast /></span>
            <div className="d-flex flex-column">
              <h4>Free Shipping</h4>
              <p>Free shipping on order</p>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-3">
            <span className='fs-1 text-success pb-4 '><i class="bi bi-arrow-repeat"></i></span>
            <div className="d-flex flex-column">
              <h4>100% Money Back</h4>
              <p>If the item didn't suit you</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home