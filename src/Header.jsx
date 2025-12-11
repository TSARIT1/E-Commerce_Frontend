

import React from "react";
import './Header.css'

function Header() {
  return (
    <header className="nav-header">

     
      <div className="nav-logo">
        <a href="/">
          <span className="dotin">Ecommerce</span>
        </a>
      </div>

      
      <div className="search-section">
        <select className="search-category">
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Beauty</option>
          <option>Mobiles</option>
        </select>

        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />

        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      
      <div className="login-btn-box">
        <button className="header-btn login-btn">
          <a href="login">Login</a>
        </button>

        <button className="header-btn register-btn">
          <a href="register">Register</a>
        </button>
      </div>

      
      <div className="profile-icon">
        <a href="profilepage">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            alt="avatar"
            className="profile"
          />
        </a>
      </div>

      
      <div className="cart-box">
        <a href="cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Cart</span></a>
      </div>

    </header>
  );
}

export default Header;
