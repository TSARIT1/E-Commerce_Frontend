import React from 'react'
import Airpods from "./assets/Airpods.jpeg"
import Coffee from "./assets/Coffee.jpeg"
import Headphone from "./assets/Headphone.jpeg"
import Mixture from "./assets/Mixture.jpeg"
import './Mostbuy.css'

function Mostbuy() {
  return (
    <div>
        <div className="top-buy-section">
      <h1 className="section-title"><i className="fa-solid fa-fire"></i> Last Week Most Bought Products</h1>
      <p className="section-subtitle">
        Top selling items our customers loved the most!
      </p>

      <div className="products-grid">

        {/* Product 1 */}
        <div className="product-card airpodspage">
          <a href='airpodspage' style={{ 
    textDecoration: "none", 
    color: "inherit" 
  }}>
          <img
            src={Airpods}
            className="product-img"
            alt=""
          />
          <h3 className="product-name">Premium Wireless Airpods</h3>
          <div className="rating"><i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i> (4.8)</div>
          <p className="price">
            ₹1,299 <del>₹2,299</del>
          </p>
          <button className="buy-btn">Buy Now</button>
          
      </a>
        </div>

        {/* Product 2 */}
        <div className="product-card coffeepage">
                    <a href='coffeepage' style={{ 
    textDecoration: "none", 
    color: "inherit" 
  }}>

          <img
            src={Coffee}
            className="product-img"
            alt=""
          />
          <h3 className="product-name">Coffee</h3>
          <div className="rating"><i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>(4.5)</div>
          <p className="price">
            ₹1,999 <del>₹3,499</del>
          </p>
          <button className="buy-btn">Buy Now</button>
         
      
      </a>
        </div>

        {/* Product 3 */}
        <div className="product-card headphonepage">
          <a href='headphonepage' style={{ 
    textDecoration: "none", 
    color: "inherit" 
  }}>
          <img
            src={Headphone}
            className="product-img"
            alt=""
          />
          <h3 className="product-name">Noise Cancelling Headphone</h3>
          <div className="rating"><i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>(4.9)</div>
          <p className="price">
            ₹2,499 <del>₹4,299</del>
          </p>
          <button className="buy-btn">Buy Now</button>
          
      </a>
        </div>

        {/* Product 4 */}
        <div className="product-card mixturepage">
          <a href='mixturepage' style={{ 
    textDecoration: "none", 
    color: "inherit" 
  }}>
          <img
            src={Mixture}
            className="product-img"
            alt=""
          />
          <h3 className="product-name">Mixture</h3>
          <div className="rating"><i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i> (4.6)</div>
          <p className="price">
            ₹1,799 <del>₹2,999</del>
          </p>
          <button className="buy-btn">Buy Now</button>
          
      </a>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Mostbuy
