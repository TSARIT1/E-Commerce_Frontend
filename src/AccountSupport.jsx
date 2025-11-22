import React from "react";
import "./AccountSupport.css";

export default function AccountSupport() {
  return (
    <div className="acc-container">

      
      <h1 className="acc-title">Account Support</h1>
      <p className="acc-subtitle">
        Manage your account issues, login problems, password help and more.
      </p>

      
      <div className="acc-grid">

        {/* BOX 1 */}
        <div className="acc-box">
          <h3><i class="fa-solid fa-lock"></i> Forgot Password</h3>
          <p className="account-para">If you forgot your password, reset it easily using your email or phone number.</p>
          <a href="#" className="acc-btn">Reset Password</a>
        </div>

        {/* BOX 2 */}
        <div className="acc-box">
          <h3><i class="fa-solid fa-message"></i> Change Email</h3>
          <p className="account-para">Update your account email if you no longer use your old ID.</p>
          <a href="#" className="acc-btn">Change Email</a>
        </div>

        {/* BOX 3 */}
        <div className="acc-box">
          <h3><i class="fa-solid fa-mobile"></i>Update Phone Number</h3>
          <p className="account-para">Keep your phone number updated to receive OTPs & notifications.</p>
          <a href="#" className="acc-btn">Update Number</a>
        </div>

        {/* BOX 4 */}
        <div className="acc-box">
          <h3><i class="fa-solid fa-child"></i> Login Issues</h3>
          <p className="account-para">Not able to login? Check your credentials or reset your password.</p>
          <a href="#" className="acc-btn">Fix Login Issue</a>
        </div>

        {/* BOX 5 */}
        <div className="acc-box">
          <h3><i class="fa-solid fa-circle"></i> Deactivate Account</h3>
          <p className="account-para">You can temporarily deactivate your account anytime.</p>
          <a href="#" className="acc-btn">Deactivate</a>
        </div>

        {/* BOX 6 */}
        <div className="acc-box">
          <h3><i class="fa-solid fa-circle-xmark"></i> Delete Account</h3>
          <p className="account-para">Permanently delete your account & all associated data.</p>
          <a href="#" className="acc-btn">Delete Account</a>
        </div>
      </div>

      
      <div className="acc-contact">
        <h2>Need More Help?</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +91 009876543210</p>
      </div>

    </div>
  );
}
