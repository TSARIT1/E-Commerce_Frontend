import React from "react";
import "./PaymentSupport.css";

export default function PaymentSupport() {
  return (
    <div className="pay-container">

      {/* HEADER */}
      <h1 className="pay-title">Payment Support</h1>
      <p className="pay-subtitle">Having trouble with payment? We’re here to help you.</p>

      
      <div className="pay-grid">

        {/* BOX 1 */}
        <div className="pay-box">
          <h3><i class="fa-solid fa-money-bills"></i>  Payment Failed</h3>
          <p className="payment-para">If your payment failed but money was deducted, it will be auto-refunded within 3–5 days.</p>
          <a href="reportissue" className="pay-btn">Report Payment Issue</a>
        </div>

        {/* BOX 2 */}
        <div className="pay-box">
          <h3><i class="fa-solid fa-clock"></i>  Payment Pending</h3>
          <p className="payment-para">Sometimes banks take extra time to confirm payments. Please wait for 10–30 minutes.</p>
          <a href="myorder" className="pay-btn">Check Your Orders</a>
        </div>

        {/* BOX 3 */}
        <div className="pay-box">
          <h3><i class="fa-solid fa-file"></i> Payment Receipt</h3>
          <p className="payment-para">You can download the payment invoice from your order details section.</p>
          <a href="myorder" className="pay-btn">Go to My Orders</a>
        </div>

        {/* BOX 4 */}
        <div className="pay-box">
          <h3><i class="fa-regular fa-money-bill-1"></i> Refund Related</h3>
          <p className="payment-para">Refunds are processed within 5–7 working days depending on your bank.</p>
          <a href="returnpolicy" className="pay-btn">View Refund Policy</a>
        </div>

      </div>

      
      <div className="pay-contact">
        <h2>Need More Help?</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

    </div>
  );
}
