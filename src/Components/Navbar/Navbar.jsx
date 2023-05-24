import React from "react";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className = {` navbar navbar-expand-lg bg-body-tertiary ${style.container} `} >
      <div className="container-fluid">
        <a className={`navbar-brand ${style.title}`} href="#">
          Shopping List
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Shop
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div className={`d-flex ${style.icons}`}>
            <div>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>

            <div>
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
