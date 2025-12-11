import React from 'react'
import Bike4 from "./assets/Bike4.jpeg"
import './Bikepage.css'


function Bike4page() {
  return (
     <div className="Bike-product-container">
    
      <div className="Bike-product-hero">
        <h1 className="Bike-product-title">Premium Sport Bike</h1>
        <p className="Bike-product-subtitle">Flat 40% OFF — This Week Only!</p>
      </div>
    
      <div className="Bike-product-section">
        <img src={Bike4} className="Bike-product-image" alt="bike" />
    
        <div className="Bike-product-content">
    
          <h2>About This Bike</h2>
          <p>This premium sport bike is designed for power, comfort and stability.</p>
    
          <ul className="Bike-product-features">
            <li>✔ Powerful Engine Performance</li>
            <li>✔ Smooth Riding Experience</li>
            <li>✔ Heavy-Duty Body Build</li>
            <li>✔ Stylish Sport Look</li>
          </ul>
    
          <div className="Bike-rating">
            <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
            <span className="Bike-rating-count">(4.2 / 5 Rating)</span>
          </div>
    
          <h3 className="Bike-price">
            ₹54,999 <span className="Bike-cut-price">₹89,999</span>
          </h3>
    
        
          <div className="Bike-quantity-box">
            <p>Quantity:</p>
            <select className="Bike-qty-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
    
         
          <div className="Bike-pincode-box">
            <p>Check Delivery:</p>
            <input type="number" placeholder="Enter Pincode" className="Bike-pincode-input" />
            <button className="Bike-check-btn">Check</button>
          </div>
    
         
          <div className="Bike-like-box">
            <button className="Bike-like-btn"><i className="fa-solid fa-thumbs-up"></i> Like</button>
            <button className="Bike-dislike-btn"><i className="fa-solid fa-thumbs-down"></i> Dislike</button>
          </div>
    
         
          <div className="Bike-buttons">
            <button className="Bike-add-btn">Add to Cart</button>
            <button className="Bike-buy-btn">Buy Now</button>
          </div>
    
        </div>
      </div>
    
     
      <div className="Bike-spec-box">
        <h3>Specifications</h3>
        <ul>
          <li>Engine: 180cc</li>
          <li>Top Speed: 140 km/h</li>
          <li>Fuel Type: Petrol</li>
          <li>Mileage: 40 km/l</li>
        </ul>
      </div>
    
    
      <div className="Bike-highlights-box">
        <h3>Highlights</h3>
        <ul>
          <li>✔ Premium Quality Metal Body</li>
          <li>✔ Digital Meter</li>
          <li>✔ Best for Long Rides</li>
          <li>✔ 2 Years Warranty</li>
        </ul>
      </div>
    
     
      <div className="Bike-seller-box">
        <h3>Seller Information</h3>
        <p><strong>Sold By:</strong> AutoWorld Pvt Ltd</p>
        <p><strong>Rating:</strong> <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i> (4.1)</p>
        <p><strong>Address:</strong> Delhi, India</p>
      </div>
    
      <div className="Bike-review-section">
        <h3>Customer Reviews</h3>
    
        <div className="Bike-review-card">
          <div className="Bike-review-stars"><i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i></div>
          <p>Very good bike! Comfortable and stylish.</p>
          <span>- Rohit</span>
        </div>
    
        <div className="Bike-review-card">
          <div className="Bike-review-stars"><i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i></div>
          <p>Performance is great. Worth the price.</p>
          <span>- Amaan</span>
        </div>
      </div>
    
      <div className="Bike-comment-box">
        <h3>Write a Comment</h3>
        <textarea className="Bike-comment-input" placeholder="Write your review..."></textarea>
        <button className="Bike-comment-btn">Submit</button>
      </div>
    
      
      <div className="Bike-qna-section">
        <h3>Questions & Answers</h3>
    
        <div className="Bike-qna-box">
          <p className="Bike-qna-q">Q: Is this good for long rides?</p>
          <p className="Bike-qna-a">A: Yes! Very comfortable for long travel.</p>
        </div>
    
        <div className="Bike-qna-box">
          <p className="Bike-qna-q">Q: What is the mileage?</p>
          <p className="Bike-qna-a">A: Approx 40 km/l.</p>
        </div>
      </div>
    
    </div>
  )
}

export default Bike4page
