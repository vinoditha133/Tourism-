import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary row">
       
  <div class="container-fluid">
  <div className='col-md-6'>
    <Link class="navbar-brand ps-4 pe-4 b-1 me-5" to="/home">
      <img src={logo} alt='logo' /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button></div>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-dark font-weight-bold ps-4 pe-4  me-4" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-dark font-weight-bold ps-4 pe-4 b-1 me-1  " to="/tours">Tour</Link>
        </li>
        <li class="nav-item">
          <Link class=" nav-link active text-dark font-weight-bold ps-4 pe-4 b-1 me-3" to="/login">login</Link>
        </li>
        <li class="nav-item">
          <Link class=" nav-link active btn btn-warning rounded-pill ps-4 pe-4 b-1 me-5" to="/register">Register</Link>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
