import React from "react";
import Navbarlist from "./navbar-list.jsx";
import CollapseBtn from "./nav-collapse-btn.jsx";

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg ">
      <a className="navbar-brand " href="google.com">
        <img
          class="nav-icon"
          src="https://cdn1.iconfinder.com/data/icons/impossible-objects-vol-2/128/Prancheta_24-256.png"
          alt="logo"
        />
      </a>
      <CollapseBtn />
      <Navbarlist />
    </nav>
  );
}
export default Navbar;
