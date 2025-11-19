import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">SIPVS</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Online Classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
