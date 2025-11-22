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
             <a href='product'>
            <li>Products</li></a>
            <a href='specialoffer'>
            
            </a>
            <a href='myorder'>
            <li>My Orders</li></a>
            
            
          </ul>
        </div>

      
        <div className="footer-col">
          <h4 className="footer-title">Customer Care</h4>
          <ul className="footer-links">
            <a href='helpcenter'>
            <li>Help Center</li></a>

            <a href='returnpolicy'>
            <li>Return Policy</li></a>

            <a href='shippinginfo'>
            <li>Shipping Info</li></a>
              
              <a href='trackorder'>
            <li>Track Order</li></a>

            <a href='reportissue'>
            <li>Report Issue</li></a>
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
