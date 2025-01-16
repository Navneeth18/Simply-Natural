import React from 'react'
import img from "../assets/logo-4.png"

function Footer() {
  return (
    <div className='d-flex  m-5 justify-content-around align-items-center'>
        <div className=" d-flex flex-column justify-content-center align-items-center gap-3">
            <img src={img} alt="" width={"70vw"} />
            <h3>Simply Natural</h3>
            <div className="icons d-flex gap-3 ">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-linkedin"></i>
            </div>

        </div>

        <div className="">
            <h5>Quick Links</h5>
            <div className="mt-3" style={{fontSize:"0.8rem"}}>
            <p>Introduction</p>
            <p>Know more About us</p>
            <p>Visit store</p>
            <p>Let's Connect</p>
            </div>
        </div>

        <div className="">
            <h5>Important Links</h5>
            <div className="mt-3" style={{fontSize:"0.8rem"}}>
            <p>Privacy Policy</p>
            <p>Shipping Details</p>
            <p>Terms & conditions</p>
            <p >Media Kit</p>
            </div>
            
        </div>

        <div className="" style={{maxWidth:"20vw"}}>
            <h5>Get In Touch with Us For The Best Quality Plants & Succulents</h5>
            <div className="mt-3" style={{fontSize:"0.8rem"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque atque exercitationem maxime. Quo asperiores quas, animi corrupti architecto quaerat suscipit!</p>
            </div>
        </div>
    </div>
  )
}

export default Footer