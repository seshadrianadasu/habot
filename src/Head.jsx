import React from 'react'
import habot from './assets/images/habot-logo-removebg-preview.png'
import {Link, Outlet} from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";
function Head() {
  return (
  <>
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <img src={habot}className='img' alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/FieldSupplier">Field Supplier</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FieldTags">Field Service Tags<FaChevronDown/></Link>
            </li>
          </ul>
          <Link className='border-success border border-2 text-success rounded p-2 text-decoration-none' to="/SignUp">Login/SignUp</Link>
        </div>
    </div>
</nav>
<Outlet/>
    </>
  )

}

export default Head