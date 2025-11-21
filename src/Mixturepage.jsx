import React from 'react'
import Mixture from "./assets/Mixture.jpeg"
import './Mixturepage.css'

function Mixturepage() {
  return (
     <div className='mixture'>
      <div className="mixture-container">

      
        <div className="mixture-left">
          <img src={Mixture} className="mixture-main-img" alt="" />

          <div className="mixture-thumb-row">
            <img src={Mixture} className="mixture-thumb" alt="" />
            <img src={Mixture} className="mixture-thumb" alt="" />
            <img src={Mixture} className="mixture-thumb" alt="" />
          </div>
        </div>

        
        <div className="mixture-right">

          <h2 className="mixture-title">mixture</h2>

          <div className="mixture-rating"><i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i> (4.5)</div>

          <p className="mixture-price">
            ₹1,999 <del>₹3,499</del>
          </p>

          <p className="mixture-description">
            Track your daily health data with this Smart Fitness Watch.  
            Features include Heart Rate Monitor, SpO2, Sleep Tracking,  
            Water Resistance and long battery backup.
          </p>

          <ul className="mixture-features">
            <li>✔ Heart Rate & SpO2 Monitoring</li>
            <li>✔ 1.75” HD Full Touch Display</li>
            <li>✔ High quality</li>
            <li>✔ 7 Tasty</li>
            <li>✔ Pure impure</li>
          </ul>

          <div className="mixture-buttons">
            <button className="mixture-buy-btn">Buy Now</button>
            <button className="mixture-cart-btn">Add to Cart</button>
          </div>

          
          <div className="mixture-quantity-box">
            <label>Quantity:</label>
            <input type="number" min="1" max="10" className="mixture-qty-input" />
          </div>

          
          <div className="mixture-pincode-box">
            <label>Check Delivery:</label>
            <input type="text" placeholder="Enter Pincode" className="mixture-pincode-input" />
            <button className="mixture-pincode-btn">Check</button>
          </div>

          
          <div className="mixture-like-box">
            <button className="mixture-like-btn"><i className="fa-solid fa-thumbs-up"></i> Like</button>
            <button className="mixture-dislike-btn"><i className="fa-solid fa-thumbs-down"></i> Dislike</button>
          </div>

          
          <div className="mixture-review-box">
            <h3>Add Your Review</h3>
            <textarea className="mixture-review-text" placeholder="Write your review..."></textarea>
            <button className="mixture-submit-review">Submit Review</button>
          </div>

          
          <div className="mixture-review-list">
            <h3>Customer Reviews</h3>

            <div className="mixture-review-item">
              <strong>Khushi</strong>
              <p>Very nice product, taste is awesome! <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i></p>
            </div>

            <div className="mixture-review-item">
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

export default Mixturepage
