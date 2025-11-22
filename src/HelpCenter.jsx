import React from "react";
import './HelpCenter.css'

function HelpCenter() {
  return (
    <div className="help-center-page">

      
      <div className="help-header">
        <h1>Help Center</h1>
        <p>Your one-stop support for all shopping related queries</p>
      </div>

      <div className="help-grid">

        <div className="help-box">
          <i className="fa-solid fa-arrow-rotate-left help-icon"></i>
          <h2>Return & Refund</h2>
          <p>Know the policy, process and refund timelines easily.</p>
          <a href="/returnpolicy">Read More →</a>
        </div>

        <div className="help-box">
          <i className="fa-solid fa-bag-shopping help-icon"></i>
          <h2>Order Help</h2>
          <p>Track orders, delivery status and modify shipping address.</p>
          <a href="trackorder">Track Order →</a>
        </div>

        <div className="help-box">
          <i className="fa-solid fa-credit-card help-icon"></i>
          <h2>Payment Issues</h2>
          <p>Payment failed? Money deducted? We’re here to help.</p>
          <a href="paymentsupport">Payment Support →</a>
        </div>

        <div className="help-box">
          <i className="fa-solid fa-user help-icon"></i>
          <h2>Account Support</h2>
          <p>Update profile, change password and manage addresses.</p>
          <a href="accountsupport">Manage Account →</a>
        </div>

       

      </div>

    </div>
  );
}

export default HelpCenter;
