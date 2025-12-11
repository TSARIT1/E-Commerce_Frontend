import React from 'react'
import Spactacles from "./assets/Spactacles.jpeg"

function Spactaclespage() {
  return (
    <div className='datails-page'>
  <div className="container my-5">

    <div className="row">
      
     
      <div className="col-md-5 text-center">
        <img
          src={Spactacles}
          className="img-fluid main-img shadow rounded"
          alt="product"
          style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }}
        />

        <div className="d-flex gap-3 justify-content-center mt-3">
          <img src={Spactacles} className="thumb-img" alt="" />
          <img src={Spactacles} className="thumb-img" alt="" />
          <img src={Spactacles} className="thumb-img" alt="" />
        </div>
      </div>

      
      <div className="col-md-7">

        <h2 className="fw-bold">Spactacles</h2>

        <div className="d-flex align-items-center mt-2 mb-3">
          <span className="badge bg-success me-2">4.3 ★</span>
          <span>2,431 Ratings & 512 Reviews</span>
        </div>

        <hr />

      
        <h3 className="text-danger fw-bold">₹1,299</h3>
        <p className="text-muted">
          MRP: <del>₹1,500</del>
          <span className="text-success fw-semibold"> (40% OFF)</span>
        </p>

        <hr />

      
        <h5 className="fw-semibold">Product Details:</h5>
        <ul className="mt-2">
          <li>Comfortable</li>
          <li>Stylish and modern</li>
          <li>Available in all colours</li>
        </ul>

        <hr />

       
        <p className="text-muted">
          <strong>Delivery:</strong> Get it in <b>4–6 days</b>
        </p>

      
        <div className="mb-3">
          <label className="fw-semibold">Quantity:</label>
          <select className="form-select w-25 mt-1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>5</option>
          </select>
        </div>

      
        <div className="mb-3">
          <label className="fw-semibold">Check Delivery Pincode</label>
          <div className="d-flex gap-2 mt-1">
            <input type="number" className="form-control w-50" placeholder="Enter Pincode" />
            <button className="btn btn-primary">Check</button>
          </div>
        </div>

       
        <div className="d-flex gap-3 my-3">
          <button className="btn btn-outline-primary"><i className="fa-solid fa-thumbs-up"></i>
 Like</button>
          <button className="btn btn-outline-danger"><i className="fa-solid fa-thumbs-down"></i> Dislike</button>
        </div>

      
        <div className="mt-4 d-flex gap-3">
          <button className="btn btn-warning px-4 py-2 fw-semibold">
            Add to Cart
          </button>
          <button className="btn btn-danger px-4 py-2 fw-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </div>

    <hr className="my-5" />

  
    <h4 className="fw-bold mb-3">Specifications</h4>
    <ul>
      <li>Frame Material: Premium Fiber</li>
      <li>Lens: Zero Power UV Protection</li>
      <li>Ideal For: Men & Women</li>
      <li>Warranty: 6 Months</li>
    </ul>

    <hr className="my-5" />

   
    <h4 className="fw-bold mb-3">Seller Information</h4>
    <p><strong>Seller:</strong> Vision World Store</p>
    <p><strong>Rating:</strong> 4.5 ★</p>
    <p><strong>Shipped From:</strong> Mumbai, India</p>

    <hr className="my-5" />

   
    <h4 className="fw-bold mb-3">Return & Replacement</h4>
    <p>• 7 Days Return Available</p>
    <p>• Easy Replacement in case of damage</p>
    <p>• No return on used or scratched items</p>

    <hr className="my-5" />

   
    <h4 className="fw-bold mb-3">Safety & Care</h4>
    <ul>
      <li>Always store in a protective case</li>
      <li>Clean with microfiber cloth only</li>
      <li>Keep away from direct heat</li>
    </ul>

    <hr className="my-5" />

  
    <h4 className="fw-bold mb-3">Customer Questions & Answers</h4>
    <div className="mb-3">
      <p><strong>Q:</strong> Kya ye original glasses hain?</p>
      <p><strong>A:</strong> Yes, premium quality assured.</p>
    </div>
    <div className="mb-3">
      <p><strong>Q:</strong> Kya ye unisex product hai?</p>
      <p><strong>A:</strong> Haan, men & women dono use kar sakte hain.</p>
    </div>

    <hr className="my-5" />

    <h4 className="fw-bold mb-4">Similar Products</h4>

    <div className="row g-4">
      <div className="col-md-3">
        <div className="card shadow-sm">
          <img src={Spactacles} className="card-img-top" alt="" />
          <div className="card-body">
            <h6 className="fw-bold">Stylish Specs</h6>
            <p className="text-danger fw-semibold">₹999</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm">
          <img src={Spactacles} className="card-img-top" alt="" />
          <div className="card-body">
            <h6 className="fw-bold">Blue Light Glasses</h6>
            <p className="text-danger fw-semibold">₹1,199</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm">
          <img src={Spactacles} className="card-img-top" alt="" />
          <div className="card-body">
            <h6 className="fw-bold">Smart Specs</h6>
            <p className="text-danger fw-semibold">₹899</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


  )
}

export default Spactaclespage
