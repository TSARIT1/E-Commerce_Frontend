import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">

      <div className="footer-wrapper">

       
        <div className="footer-col">
          <h2 className="footer-logo">Ecommerce</h2>
          <p className="footer-desc">
            Your trusted online store for fashion, electronics, and everyday essentials.
          </p>

          <div className="footer-socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <a href='/'>
            <li>Home</li>
            </a>

            <li>Products</li>
            <a href='specialoffer'>
            <li>Offers</li>
            </a>
            <li>My Orders</li>
            <li>Contact</li>
          </ul>
        </div>

      
        <div className="footer-col">
          <h4 className="footer-title">Customer Care</h4>
          <ul className="footer-links">
            <li>Help Center</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
            <li>Track Order</li>
            <li>Report Issue</li>
          </ul>
        </div>

      
        <div className="footer-col">
          <h4 className="footer-title">Stay Updated</h4>
          <p className="footer-desc">
            Subscribe to get latest offers and discount alerts.
          </p>

          <div className="footer-newsletter">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2025 Ecommerce. All Rights Reserved.</p>
    </footer>
    </div>
  )
}

export default Footer
