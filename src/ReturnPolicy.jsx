import React from "react";
import "./ReturnPolicy.css";

export default function ReturnPolicy() {
  return (
    <div className="rp-main">

      
      <div className="rp-header">
        <h1>Return & Refund Policy</h1>
        <p>Your satisfaction is our priority</p>
      </div>

      
      <div className="rp-container">

        <div className="rp-section">
          <h2 className="rp-title rp-red"><i className="fa-solid fa-box"></i> Return Window</h2>
          <p>
            You can return your product within <strong>7 days</strong> of delivery.
            Item must be unused and with all original tags & packaging.
          </p>
        </div>

        <div className="rp-section">
          <h2 className="rp-title rp-orange"><i className="fa-solid fa-clock"></i> Items Eligible for Return</h2>
          <ul>
            <li>Damaged / defective product</li>
            <li>Incorrect product delivered</li>
            <li>Product not matching description</li>
            <li>Wrong size issues</li>
          </ul>
        </div>

        <div className="rp-section">
          <h2 className="rp-title rp-red"><i class="fa-solid fa-money-bills"></i> Refund Options</h2>
          <ul>
            <li>Original payment method</li>
            <li>Bank transfer refund</li>
            <li>Store credits</li>
          </ul>
        </div>

        <div className="rp-section">
          <h2 className="rp-title rp-orange"><i className="fa-solid fa-truck"></i>  How to Request Return?</h2>
          <ol>
            <li>Go to the Help Center</li>
            <li>Select Return Request</li>
            <li>Upload required product images</li>
            <li>Team verifies within 24 hours</li>
          </ol>
        </div>

        <div className="rp-section">
          <h2 className="rp-title rp-red"><i class="fa-solid fa-triangle-exclamation"></i> Return Not Accepted If</h2>
          <ul>
            <li>Product is used or damaged by customer</li>
            <li>Missing box, accessories, or invoice</li>
            <li>Return request after 7 days</li>
          </ul>
        </div>

        
        <div className="rp-help">
          <h3><i class="fa-solid fa-phone"></i> Need Help?</h3>
          <p>Email: ecommerce@ecommerce.com</p>
          <p>Phone: +91 098765 43210</p>
        </div>

      </div>

      
      <p className="rp-footer">
        @2025 Your E-Commerce Store — All Rights Reserved
      </p>

    </div>
  );
}
