import React from "react";
import Navbarlist from "./navbar-list.jsx";
import CollapseBtn from "./nav-collapse-btn.jsx";
import Footer from "./footer.jsx";

function Navbar() {
  return (
    <section id="title">
      <nav className="navbar navbar-light navbar-expand-lg ">
        <a className="navbar-brand " href="google.com">
          tindog
        </a>
        <CollapseBtn />
        <Navbarlist />
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className=" mt-10 col-lg-6">
            <h1 className="left-col">
              Don't Worry.
              <br />
              We are here for every solution
            </h1>
            <p className="left-col text">
              Lorem ipsum dolor sit amet, adipiscing elit.Lorem ipsum dolor sit
              amet, adipiscing elit.
            </p>
            <button
              type="button"
              className="btn rounded-pill btn-primary btn-lg ps-4 pe-4 "
            >
              Get Started
            </button>
            <button
              type="button"
              className="btn rounded-pill btn-light btn-lg ms-2"
            >
              <i class="far fa-play-circle playicon"></i> Watch Videos
            </button>
          </div>
          <div className="col-lg-6 ">
            <img
              src="https://craftwork-images.b-cdn.net/wp-content/uploads/no-gravity-13-bad-gateway.png"
              className="title-image"
              alt="title-img"
            />
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
