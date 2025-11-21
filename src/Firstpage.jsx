import React from 'react'
import serum from "./assets/serum.jpeg";
import glow from "./assets/glow.jpeg"
import earthbar from "./assets/earthbar.jpeg"
import './Firstpage.css'

function Firstpage() {
  return (

<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={serum} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='firstpage-para'>Shopping</h5>
        <p className='firstpage-para'>Everything You Need, Delivered to Your Doorstep.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={earthbar} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='firstpage-para'>Shopping</h5>
        <p className='firstpage-para'>Everything You Need, Delivered to Your Doorstep.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={glow} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='firstpage-para'>Shopping</h5>
        <p className='firstpage-para'>Everything You Need, Delivered to Your Doorstep.</p>
      </div>
    </div>
  </div>
 
</div>

  )
}

export default Firstpage
