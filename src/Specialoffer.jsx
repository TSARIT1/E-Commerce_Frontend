import React from 'react'
import './Specialoffer.css'
import Bike1 from "./assets/Bike1.jpeg"
import Bike2 from "./assets/Bike2.jpeg"
import Bike3 from "./assets/Bike3.jpeg"
import Bike4 from "./assets/Bike4.jpeg"
import Bike5 from "./assets/Bike5.jpeg"
import Scooty from "./assets/Scooty.jpeg"



function Specialoffer() {
  return (
    <div>
      <div className="offer-container container mt-4">

       
        <div className="offer-banner text-center p-4 rounded">
          <h2 className="fw-bold"> <i className="fa-solid fa-fire"></i> Special Festive Sale</h2>
          <p className="mb-1">Grab the best deals before the offer ends!</p>
          <h4 className="text-white fw-bold">Up to 60% OFF</h4>
        </div>


        <div className="timer-box text-center mt-4 p-3 rounded">
          <h5 className="fw-semibold"><i className="fa-solid fa-clock"></i> Flash Sale Ends In:</h5>
          <div className="timer">
            <span>04</span> : <span>12</span> : <span>55</span>
          </div>
          <p className="text-muted">Hours : Minutes : Seconds</p>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-md-4">
            <a href='bike1' style={{
              textDecoration: "none",
              color: "inherit"
            }}>
              <div className="offer-card">
                <img src={Bike1} className="offer-img" alt="Offer" />
                <h5 className="mt-3">bike</h5>
                <p className="text-danger fw-bold">Flat 40% OFF</p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "5px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "60%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </a>
          </div>

          <div className="col-md-4 bike2">
            <a href='bike2' style={{
              textDecoration: "none",
              color: "inherit"
            }}>
              <div className="offer-card">
                <img src={Bike2} className="offer-img" alt="Offer" />
                <h5 className="mt-3">Bike</h5>
                <p className="text-danger fw-bold">Up to 60% OFF</p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "5px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "60%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </a>
          </div>

          <div className="col-md-4 bike3">
            <a href='bike3' style={{
              textDecoration: "none",
              color: "inherit"
            }}>
              <div className="offer-card">
                <img src={Bike3} className="offer-img" alt="Offer" />
                <h5 className="mt-3">Bike</h5>
                <p className="text-danger fw-bold">Buy 1 Get 1 FREE</p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "5px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "60%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </a>
          </div>
        </div>


        <h3 className="mt-5 mb-3 fw-bold"><i className="fa-solid fa-fire"></i>Trending Deals</h3>

        <div className="row g-4">
          <div className="col-6 col-md-3 bike4">
            <a href='bike4' style={{
              textDecoration: "none",
              color: "inherit"
            }}>
              <div className="product-card text-center">
                <img src={Bike4} className="product-img" alt="" />
                <p className="product-name">Bike</p>
                <p className="price">₹84,799 <del>₹91,599</del></p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "5px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "60%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </a>
          </div>

          <div className="col-6 col-md-3 bike5">
            <a href='bike5' style={{
              textDecoration: "none",
              color: "inherit"
            }}>
              <div className="product-card text-center">
                <img src={Bike5} className="product-img" alt="" />
                <p className="product-name">Bike</p>
                <p className="price">₹87,999 <del>₹91,999</del></p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "5px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "60%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </a>
          </div>

          <div className="col-6 col-md-3 bike1">
            <a href='bike1' style={{
              textDecoration: "none",
              color: "inherit"
            }}>
              <div className="product-card text-center">
                <img src={Bike1} className="product-img" alt="" />
                <p className="product-name">Bike</p>
                <p className="price">₹53,349 <del>₹73,999</del></p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "5px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "60%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </a>
          </div>

          <div className="col-6 col-md-3 scootypage">
            <a href='scootypage' style={{
              textDecoration: "none",
              color: "inherit"
            }}>
              <div className="product-card text-center">
                <img src={Scooty} className="product-img" alt="" />
                <p className="product-name">Scooty</p>
                <p className="price">₹89,349 <del>₹99,699</del></p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "5px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "60%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Specialoffer
