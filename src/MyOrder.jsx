import React from "react";
import "./MyOrder.css";
import Earrings from "./assets/Earrings.jpeg"
import Mensjacket from "./assets/Mensjacket.jpeg"
import Handbag from "./assets/Handbag.jpeg"

export default function MyOrder() {
  return (
    <div className="orders-container">

      
      <h1 className="orders-title">My Orders</h1>
      <p className="orders-subtitle">Track, manage and view all your orders here.</p>

      
      <div className="order-card">
        <div className="order-img-box">
          <img src={Mensjacket} alt="product" />
        </div>

        <div className="order-details">
          <h3 className="order-name">Wireless Bluetooth Headphones</h3>

          <p className="order-status delivered">Delivered on 5 Nov 2025</p>

          <p className="order-id">Order ID: #ORD753124</p>

          <div className="order-buttons">
            <a href="trackorder" className="order-btn">Track Order</a>
            <a href="reportissue" className="order-btn2">Report Issue</a>
          </div>
        </div>
      </div>

      {/* -------- ORDER 2 -------- */}
      <div className="order-card">
        <div className="order-img-box">
          <img src={Handbag} alt="product" />
        </div>

        <div className="order-details">
          <h3 className="order-name">Men's Casual Shoes</h3>

          <p className="order-status pending">Arriving on 12 Nov 2025</p>

          <p className="order-id">Order ID: #ORD985347</p>

          <div className="order-buttons">
            <a href="trackorder" className="order-btn">Track Order</a>
            <a href="reportissue" className="order-btn2">Report Issue</a>
          </div>
        </div>
      </div>

      
      <div className="order-card">
        <div className="order-img-box">
          <img src={Earrings} alt="product" />
        </div>

        <div className="order-details">
          <h3 className="order-name">Smart LED Watch</h3>

          <p className="order-status shipped">Shipped — On the way</p>

          <p className="order-id">Order ID: #ORD562311</p>

          <div className="order-buttons">
            <a href="trackorder" className="order-btn">Track Order</a>
            <a href="reportissue" className="order-btn2">Report Issue</a>
          </div>
        </div>
      </div>

    </div>
  );
}
