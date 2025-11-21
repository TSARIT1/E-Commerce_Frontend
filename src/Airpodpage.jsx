import React from 'react'
import "./Airpodpage.css";
import Airpods from "./assets/Airpods.jpeg";

export default function Airpodpage() {
  return (
    <div>
      <div className="about-container">

       
        <div className="left-section">
          <img src={Airpods} className="main-img" alt="" />

          <div className="thumb-row">
            <img src={Airpods} className="thumb-img" alt="" />
            <img src={Airpods} className="thumb-img" alt="" />
            <img src={Airpods} className="thumb-img" alt="" />
          </div>
        </div>

        <div className="right-section">
          <h2 className="product-title">Premium Wireless Airpods</h2>

          <div className="rating-box">
            <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i> <span>(4.8 Rating)</span>
          </div>

          <p className="price-box">
            ₹1,299 <del>₹2,299</del>
          </p>

          <p className="description">
            Experience crystal clear sound with Premium Wireless Earbuds. Designed for comfort, noise cancellation and long battery backup. Perfect for gym, travel, and daily use.
          </p>

          <ul className="features">
            <li>✔ Up to 20 hours playtime</li>
            <li>✔ Fast charging support</li>
            <li>✔ Deep bass tuned speakers</li>
            <li>✔ Sweat & splash resistant</li>
            <li>✔ Bluetooth 5.3 stable connection</li>
          </ul>

          <div className="quantity-box">
            <h4>Quantity:</h4>
            <div className="qty-controls">
              <button className="qty-btn">-</button>
              <span className="qty-number">1</span>
              <button className="qty-btn">+</button>
            </div>
          </div>

          <div className="pincode-box">
            <h4>Check Delivery:</h4>
            <input type="text" className="pincode-input" placeholder="Enter Pincode" />
            <button className="pincode-btn">Check</button>
          </div>

          <div className="like-box">
            <button className="like-btn"><i className="fa-solid fa-thumbs-up"></i> Like</button>
            <button className="dislike-btn"><i className="fa-solid fa-thumbs-down"></i>
 Dislike</button>
          </div>

          <div className="action-row">
            <button className="buy-btn">Buy Now</button>
            <button className="cart-btn">Add to Cart</button>
          </div>

          <div className="review-section">
            <h3>Customer Reviews</h3>

            <div className="review-item">
              <strong><i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i> 5</strong>
              <p>Great sound quality! Battery lasts very long. - Riya</p>
            </div>

            <div className="review-item">
              <strong><i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i> 4</strong>
              <p>Comfortable & clear audio. Worth the money! - Aman</p>
            </div>

            <div className="write-review-box">
              <h4>Write a Review:</h4>
              <textarea className="review-input" placeholder="Share your experience..."></textarea>
              <button className="submit-review-btn">Submit Review</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}