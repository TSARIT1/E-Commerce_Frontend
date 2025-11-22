import React from "react";
import "./TrackOrder.css";
import Handbag from "./assets/Handbag.jpeg"

export default function TrackOrder() {
  return (
    <div className="track-main">

      {/* HEADER */}
      <div className="track-header">
        <h1>Track Your Order</h1>
        <p>Live delivery updates for your product</p>
      </div>

      {/* ORDER CARD */}
      <div className="track-card">
        <div className="track-card-left">
          <img
            src={Handbag}
            alt="Product"
            className="track-product-img"
          />
        </div>

        <div className="track-card-right">
          <h3>Product Name</h3>
          <p>Order ID: #1234567890</p>
          <p>Estimated Delivery: 3 - 5 Days</p>
        </div>
      </div>

     
      <div className="track-timeline">

        <div className="track-step completed">
          <div className="circle"></div>
          <div className="line"></div>
          <p>Order Placed</p>
          <span>12 Jan, 10:30 AM</span>
        </div>

        <div className="track-step completed">
          <div className="circle"></div>
          <div className="line"></div>
          <p>Order Packed</p>
          <span>13 Jan, 2:15 PM</span>
        </div>

        <div className="track-step current">
          <div className="circle"></div>
          <div className="line"></div>
          <p>Shipped</p>
          <span>In Transit</span>
        </div>

        <div className="track-step upcoming">
          <div className="circle"></div>
          <p>Out For Delivery</p>
          <span>Pending</span>
        </div>

        <div className="track-step upcoming">
          <div className="circle"></div>
          <p>Delivered</p>
          <span>Pending</span>
        </div>

      </div>

      {/* HELP SECTION */}
      <div className="track-help">
        <h3><i class="fa-solid fa-phone"></i> Need Assistance?</h3>
        <p>Email: help@trackorder.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

      <p className="track-footer">
        © 2025 Your E-Commerce Store — All Rights Reserved
      </p>
    </div>
  );
}
