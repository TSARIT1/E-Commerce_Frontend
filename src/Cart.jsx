import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart">

      <h2 className="cart-title">Your Shopping Cart</h2>

      <div className="cart-container">

        
        <div className="cart-items">

          <div className="cart-item">
            <img
              src="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
              alt="product"
              className="cart-img"
            />
            <div className="cart-info">
              <h3>iPhone 15 (128 GB)</h3>
              <p className="cart-price">₹79,999</p>

              <div className="quantity-box">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button className="remove-btn">Remove</button>
            </div>
          </div>

          <div className="cart-item">
            <img
              src="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
              alt="product"
              className="cart-img"
            />
            <div className="cart-info">
              <h3>Boat Headphones</h3>
              <p className="cart-price">₹1,199</p>

              <div className="quantity-box">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button className="remove-btn">Remove</button>
            </div>
          </div>

        </div>

     
        <div className="cart-summary">
          <h3>Price Details</h3>

          <div className="summary-row">
            <span>Items</span>
            <span>2</span>
          </div>

          <div className="summary-row">
            <span>Total Price</span>
            <span>₹81,198</span>
          </div>

          <div className="summary-row">
            <span>Discount</span>
            <span className="green">-₹1,500</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Final Amount</span>
            <span>₹79,698</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>

      </div>
    </div>
  );
}

export default Cart;
