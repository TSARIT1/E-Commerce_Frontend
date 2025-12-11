

import React from 'react'
import './Product.css'
import Frock from "./assets/Frock.jpeg"
import Runshoes from "./assets/Runshoes.jpeg"
import Spactacles from "./assets/Spactacles.jpeg"
import Earrings from "./assets/Earrings.jpeg"
import Mensjacket from "./assets/Mensjacket.jpeg"
import Handbag from "./assets/Handbag.jpeg"


function Product() {
  return (
    <div className='container Product'>


      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

        <div className="col mensjacketpage">
          <a href="mensjacketpage" className="product-link">
            <div className="card product-card" >
              <img src={Mensjacket} className="card-img-top" alt="..." />
              <div className="card-body">

                <h5 className="card-title">Mens jacket</h5>

                <h3 className="text-danger fw-bold">₹1,299</h3>

                <p className="text-muted">
                  MRP: <del>₹1,500</del>
                  <span className="text-success fw-semibold"> (40% OFF)</span>
                </p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>

              </div>
            </div>
          </a>
        </div>



        <div className="col handbagpage">
          <a href="handbagpage" className="product-link">

            <div className="card">
              <img src={Handbag} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Handbag</h5>

                <h3 className="text-danger fw-bold">₹1,299</h3>
                <p className="text-muted">
                  MRP: <del>₹1,500</del> <span className="text-success fw-semibold"> (40% OFF)</span>
                </p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </a>
        </div>

        <div className="col frockpage" >
          <a href="frockpage" className="product-link">
            <div className="card">
              <img src={Frock} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Frock</h5>

                <h3 className="text-danger fw-bold">₹1,299</h3>
                <p className="text-muted">
                  MRP: <del>₹1,500</del> <span className="text-success fw-semibold"> (40% OFF)</span>
                </p>

                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>

              </div>
            </div>
          </a>
        </div>

        <div className="col shoespage">
          <a href="shoespage" className="product-link">
            <div className="card">
              <img src={Runshoes} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Runshoes</h5>

                <h3 className="text-danger fw-bold">₹1,299</h3>
                <p className="text-muted">
                  MRP: <del>₹1,500</del> <span className="text-success fw-semibold"> (40% OFF)</span>
                </p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </a>
        </div>

        <div className="col spactaclespage">
          <a href="spactaclespage" className="product-link">
            <div className="card">
              <img src={Spactacles} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Spactacles</h5>

                <h3 className="text-danger fw-bold">₹1,299</h3>
                <p className="text-muted">
                  MRP: <del>₹1,500</del> <span className="text-success fw-semibold"> (40% OFF)</span>
                </p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </a>
        </div>

        <div className="col earringspage">
          <a href="earringspage" className="product-link">
            <div className="card">
              <img src={Earrings} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Earrings</h5>

                <h3 className="text-danger fw-bold">₹1,299</h3>
                <p className="text-muted">
                  MRP: <del>₹1,500</del> <span className="text-success fw-semibold"> (40% OFF)</span>
                </p>
                <button
                  style={{
                    backgroundColor: "#ff2929",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "10px"
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Product
