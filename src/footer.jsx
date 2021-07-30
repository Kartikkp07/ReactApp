import React from "react";

function Footer() {
  return (
    <div className="container-fluid">
      <p className="footer">
        Integrations
        <span data-inline="false">
          <img className="footer-img" alt="google" src="./images/google.png" />
        </span>
        <span
          class="iconify"
          data-icon="akar-icons:google-fill"
          data-inline="false"
        ></span>
        <span
          class="iconify"
          data-icon="akar-icons:google-fill"
          data-inline="false"
        ></span>
        <span
          class="iconify"
          data-icon="akar-icons:google-fill"
          data-inline="false"
        ></span>
      </p>
    </div>
  );
}

export default Footer;
