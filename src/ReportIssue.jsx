import React from "react";
import "./ReportIssue.css";

export default function ReportIssue() {
  return (
    <div className="report-container">

      
      <h1 className="report-title">Report an Issue</h1>
      <p className="report-subtitle">
        Facing a problem with your order or product? Tell us — we’ll fix it fast!
      </p>

    
      <div className="report-form">

        
        <label className="report-label">Order ID (optional)</label>
        <input type="text" className="report-input" placeholder="Enter your order ID" />

        
        <label className="report-label">Issue Type</label>
        <select className="report-input">
          <option>Select an issue</option>
          <option>Product not received</option>
          <option>Received damaged product</option>
          <option>Wrong product delivered</option>
          <option>Payment deducted but order not placed</option>
          <option>Return/Refund issue</option>
          <option>App/Website not working</option>
          <option>Other Issue</option>
        </select>

      
        <label className="report-label">Describe Your Issue</label>
        <textarea
          className="report-textarea"
          rows="5"
          placeholder="Tell us more about the issue..."
        ></textarea>

        
        <label className="report-label">Upload Image (optional)</label>
        <input type="file" className="report-file" />

        
        <button className="report-btn">Submit Issue</button>
      </div>

      
      <div className="report-support-box">
        <h3>Need urgent help?</h3>
        <p>Email us: ecommerce@example.com</p>
        <p>Call: +91 09876543210</p>
      </div>

    </div>
  );
}
