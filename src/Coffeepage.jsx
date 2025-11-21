import React from 'react'
import "./Coffeepage.css";
import Coffee from "./assets/Coffee.jpeg";

export default function Coffeepage() {
  return (
    <div className='coffee'>
      <div className="coffee-container">

       
        <div className="coffee-left">
          <img src={Coffee} className="coffee-main-img" alt="" />

          <div className="coffee-thumb-row">
            <img src={Coffee} className="coffee-thumb" alt="" />
            <img src={Coffee} className="coffee-thumb" alt="" />
            <img src={Coffee} className="coffee-thumb" alt="" />
          </div>
        </div>

        
        <div className="coffee-right">

          <h2 className="coffee-title">Coffee</h2>

          <div className="coffee-rating"><i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i> (4.5)</div>

          <p className="coffee-price">
            ₹1,999 <del>₹3,499</del>
          </p>

          <p className="coffee-description">
            Track your daily health data with this Smart Fitness Watch.  
            Features include Heart Rate Monitor, SpO2, Sleep Tracking,  
            Water Resistance and long battery backup.
          </p>

          <ul className="coffee-features">
            <li>✔ Heart Rate & SpO2 Monitoring</li>
            <li>✔ 1.75” HD Full Touch Display</li>
            <li>✔ High quality</li>
            <li>✔ 7 Tasty</li>
            <li>✔ Pure impure</li>
          </ul>

          <div className="coffee-buttons">
            <button className="coffee-buy-btn">Buy Now</button>
            <button className="coffee-cart-btn">Add to Cart</button>
          </div>

       
          <div className="coffee-quantity-box">
            <label>Quantity:</label>
            <input type="number" min="1" max="10" className="coffee-qty-input" />
          </div>

          <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
          <div className="coffee-pincode-box">
            <label>Check Delivery:</label>
            <input type="text" placeholder="Enter Pincode" className="coffee-pincode-input" />
            <button className="coffee-pincode-btn">Check</button>
          </div>

         
          <div className="coffee-like-box">
            <button className="coffee-like-btn"><i className="fa-solid fa-thumbs-up"></i> Like</button>
            <button className="coffee-dislike-btn"><i className="fa-solid fa-thumbs-down"></i> Dislike</button>
          </div>

          
          <div className="coffee-review-box">
            <h3>Add Your Review</h3>
            <textarea className="coffee-review-text" placeholder="Write your review..."></textarea>
            <button className="coffee-submit-review">Submit Review</button>
          </div>

          
          <div className="coffee-review-list">
            <h3>Customer Reviews</h3>

            <div className="coffee-review-item">
              <strong>Khushi</strong>
              <p>Very nice product, taste is awesome! <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i></p>
            </div>

            <div className="coffee-review-item">
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