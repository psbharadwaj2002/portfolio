import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/">
              Features
            </Link>
            <Link className="nav-item nav-link" to="/">
              Pricing
            </Link>
            <Link className="nav-item nav-link disabled" to="/">
              Disabled
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
