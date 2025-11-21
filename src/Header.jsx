import React from "react";
import './Header.css'

function Header() {
  return (
    <header className="amazon-header ">

     
      <div className="amazon-logo">
       
        <span className="dotin">Ecommerce</span>
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
          placeholder="Search "
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

      
      <div className="cart-box">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Cart</span>
      </div>
    </header>
  );
}

export default Header;
