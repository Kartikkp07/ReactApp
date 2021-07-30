import React from "react";

function Navbarlist() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link " href="google.com">
            Contact
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link " href="#pricing">
            Pricing
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="google.com">
            Download
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link premium" href="google.com">
            Get Early Access
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbarlist;
