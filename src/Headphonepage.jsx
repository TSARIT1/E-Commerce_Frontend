import React from 'react'
import Headphone from "./assets/Headphone.jpeg"
import './Headphonepage.css'

function Headphonepage() {
  return (
  <div className='headphone'>
      <div className="headphone-container">

        
        <div className="headphone-left">
          <img src={Headphone} className="headphone-main-img" alt="" />

          <div className="headphone-thumb-row">
            <img src={Headphone} className="headphone-thumb" alt="" />
            <img src={Headphone} className="headphone-thumb" alt="" />
            <img src={Headphone} className="headphone-thumb" alt="" />
          </div>
        </div>

       
        <div className="headphone-right">

          <h2 className="headphone-title">headphone</h2>

          <div className="headphone-rating"><i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i> (4.5)</div>

          <p className="headphone-price">
            ₹1,999 <del>₹3,499</del>
          </p>

          <p className="headphone-description">
            Track your daily health data with this Smart Fitness Watch.  
            Features include Heart Rate Monitor, SpO2, Sleep Tracking,  
            Water Resistance and long battery backup.
          </p>

          <ul className="headphone-features">
            <li>✔ Heart Rate & SpO2 Monitoring</li>
            <li>✔ 1.75” HD Full Touch Display</li>
            <li>✔ High quality</li>
            <li>✔ 7 Tasty</li>
            <li>✔ Pure impure</li>
          </ul>

          <div className="headphone-buttons">
            <button className="headphone-buy-btn">Buy Now</button>
            <button className="headphone-cart-btn">Add to Cart</button>
          </div>

        
          <div className="headphone-quantity-box">
            <label>Quantity:</label>
            <input type="number" min="1" max="10" className="headphone-qty-input" />
          </div>

          
          <div className="headphone-pincode-box">
            <label>Check Delivery:</label>
            <input type="text" placeholder="Enter Pincode" className="headphone-pincode-input" />
            <button className="headphone-pincode-btn">Check</button>
          </div>

          
          <div className="headphone-like-box">
            <button className="headphone-like-btn"><i className="fa-solid fa-thumbs-up"></i> Like</button>
            <button className="headphone-dislike-btn"><i className="fa-solid fa-thumbs-down"></i> Dislike</button>
          </div>

         
          <div className="headphone-review-box">
            <h3>Add Your Review</h3>
            <textarea className="headphone-review-text" placeholder="Write your review..."></textarea>
            <button className="headphone-submit-review">Submit Review</button>
          </div>

      
          <div className="headphone-review-list">
            <h3>Customer Reviews</h3>

            <div className="headphone-review-item">
              <strong>Khushi</strong>
              <p>Very nice product, taste is awesome! <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i></p>
            </div>

            <div className="headphone-review-item">
              <strong>Aryan</strong>
              <p>Good quality but delivery was slow. <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i></p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Headphonepage
