import React from "react";

function CollapseBtn() {
  return (
    <button
      className="navbar-toggler btn-outline-light"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon "></span>
    </button>
  );
}

export default CollapseBtn;
