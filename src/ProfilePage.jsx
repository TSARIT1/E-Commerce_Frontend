import React from "react";
import "./ProfilePage.css"; 

function ProfilePage() {
  return (
    <div className="profile-container">

      <div className="profile-header">
        <div className="profileTop">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            alt="avatar"
            className="avatar"
          />

          <div>
            <h2 className="name">Customer</h2>
            <p className="subText">Edit Profile</p>
          </div>
        </div>

        <div className="actionBox">
          <button className="button">Help Centre</button>
          <button className="button">Refer & Earn ₹100</button>
        </div>
      </div>

      <div className="profile-section">
        <h3 className="sectionTitle">My Payments</h3>
        <div className="item">Bank & UPI Details</div>
        <div className="item">Payment & Refund</div>
      </div>

      <div className="profile-section">
        <h3 className="sectionTitle">My Activity</h3>
        <div className="item">Change Language</div>
        <div className="item">Wishlisted Products</div>
        <div className="item">Shared Products</div>
        <div className="item">
          Followed Shops <span className="badge">New</span>
        </div>
      </div>

      <div className="profile-section">
        <h3 className="sectionTitle">Others</h3>
        <div className="item">
           Balance <span className="balance">₹0</span>
        </div>
        <div className="item">
          Become a Supplier <span className="badge">New</span>
        </div>
        <div className="item">Settings</div>
        <div className="item">Rate Meesho</div>
        <div className="item">Legal and Policies</div>
        <div className="item">Logout</div>
      </div>

    </div>
  );
}

export default ProfilePage;
