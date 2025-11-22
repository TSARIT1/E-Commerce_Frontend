import React from "react";
import "./ShippingInfo.css";

export default function ShippingInfo() {
  return (
    <div className="ship-main">

      {/* HEADER */}
      <div className="ship-header">
        <h1>Shipping Information</h1>
        <p>Fast • Safe • Reliable Delivery</p>
      </div>

      {/* MAIN BOX */}
      <div className="ship-container">

        <div className="ship-section">
          <h2 className="ship-title ship-orange"><i class="fa-solid fa-truck"></i> Delivery Time</h2>
          <ul>
            <li>Standard Delivery: 4 - 7 Days</li>
            <li>Express Delivery: 1 - 3 Days</li>
            <li>Same-Day Delivery (Selected Cities)</li>
          </ul>
        </div>

        <div className="ship-section">
          <h2 className="ship-title ship-red"><i class="fa-solid fa-globe"></i> Delivery Coverage</h2>
          <ul>
            <li>We deliver across all states in India.</li>
            <li>Cash on Delivery available on most products.</li>
            <li>Remote area delivery may take additional time.</li>
          </ul>
        </div>

        <div className="ship-section">
          <h2 className="ship-title ship-orange"><i class="fa-solid fa-box"></i> Order Packaging</h2>
          <p>
            All products are packed securely with protective layers to prevent any
            damage during transit. Fragile items get extra bubble wrap protection.
          </p>
        </div>

        <div className="ship-section">
          <h2 className="ship-title ship-red"><i class="fa-regular fa-money-bill-1"></i> Shipping Charges</h2>
          <ul>
            <li>Free Shipping on orders above ₹499</li>
            <li>Standard Shipping: ₹49 - ₹79</li>
            <li>Express Shipping: ₹99 - ₹149</li>
          </ul>
        </div>

        <div className="ship-section">
          <h2 className="ship-title ship-orange"><i class="fa-solid fa-map-pin"></i> Track Your Order</h2>
          <p>
            Once shipped, you will receive an email/SMS with a tracking link.
            Click the link anytime to check live delivery status.
          </p>
        </div>

        <div className="ship-help">
          <h3><i class="fa-solid fa-phone"></i> Need Shipping Support?</h3>
          <p>Email: ecommerce@ecommerce.com</p>
          <p>Phone: +91 098765 43210</p>
        </div>

      </div>

      <p className="ship-footer">© 2025 Your E-Commerce Store — All Rights Reserved</p>
    </div>
  );
}
