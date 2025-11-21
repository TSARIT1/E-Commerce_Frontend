import React from 'react'
import './CategoryFilter.css'

function CategoryFilter() {
  return (
   <div>
  <div className="top-filter-bar">
<div className="dropdown">
<button className="drop-btn">Filter ▾</button>
<div className="dropdown-content">
<a href="#">Newest</a>
<a href="#">Popular</a>
<a href="#">High Rated</a>
</div>
</div>


<div className="dropdown">
<button className="drop-btn">Category ▾</button>
<div className="dropdown-content">
<a href="#">Men</a>
<a href="#">Women</a>
<a href="#">Electronics</a>
</div>
</div>


<div className="dropdown">
<button className="drop-btn">Price ▾</button>
<div className="dropdown-content">
<a href="#">Under ₹500</a>
<a href="#">₹500 - ₹1000</a>
<a href="#">₹1000+</a>
</div>
</div>


<div className="dropdown">
<button className="drop-btn">Sort ▾</button>
<div className="dropdown-content">
<a href="#">Price: Low to High</a>
<a href="#">Price: High to Low</a>
<a href="#">Newest First</a>
</div>
</div>
</div>

</div>



  )
}

export default CategoryFilter
