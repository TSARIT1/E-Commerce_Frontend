import React from 'react'
import './Scrollbar.css'
import Chair from "./assets/Chair.png";
import gamepad from "./assets/gamepad.png";
import Smartwatch from "./assets/Smartwatch.jpeg";
import Keyboard from "./assets/Keyboard.png";
import serum from "./assets/serum.jpeg";
import Spactacles from "./assets/Spactacles.jpeg"
import Earrings from "./assets/Earrings.jpeg"
import Mensjacket from "./assets/Mensjacket.jpeg"
import Handbag from "./assets/Handbag.jpeg"
import Runshoes from "./assets/runshoes.jpeg"



function Scrollbar() {
  return (
    <div className="container scrollbar my-5">

   
      <h4 className="mb-3 fw-bold">Demanded Products</h4>
      <div className="scroll-container scroll-ltr mb-5">
        <div className="scroll-content">
          <img src={serum} alt="" />
          <img src={Keyboard} alt="" />
          <img src={Smartwatch} alt="" />
          <img src={gamepad} alt="" />
          <img src={Chair} alt="" />
          <img src={Spactacles} alt="" />


          <img src={Earrings} alt="" />


          <a href="mensjacketpage" className="product-link">
          <img src={Mensjacket} alt="" />
          </a>

            <a href="handbagpage" className="product-link">
          <img src={Handbag} alt="" /></a>

          
          <img src={Keyboard} alt="" />
          <img src={Smartwatch} alt="" />
          <img src={gamepad} alt="" />
          <img src={Chair} alt="" />

          <a href="spactaclespage" className="product-link">
          <img src={Spactacles} alt="" /></a>

          <a href="earringspage" className="product-link">
          <img src={Earrings} alt="" />
          </a>

          <a href="shoespage" className="product-link">
          <img src={Runshoes} alt="" />
           </a>

          <a href="mensjacketpage" className="product-link">
          <img src={Mensjacket} alt="" />
            </a>

         <a href="handbagpage" className="product-link">
          <img src={Handbag} alt="" />
          </a>
        </div>
      </div>


    </div>
  )
}

export default Scrollbar



