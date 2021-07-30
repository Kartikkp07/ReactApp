import React from "react";

function Footer() {
  return (
    <div>
      <p className="footer">
        Integrations
        <span data-inline="false">
          <img
            className="footer-img"
            alt="amazon"
            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
          />
        </span>
        <span data-inline="false">
          <img
            className="footer-img"
            alt="northern"
            src="https://cdn.worldvectorlogo.com/logos/northern-2.svg"
          />
        </span>
        <span data-inline="false">
          <img
            className="footer-img"
            alt="google"
            src="https://cdn3.iconfinder.com/data/icons/social-media-2253/78/Vector-6-512.png"
          />
        </span>
        <span data-inline="false">
          <img
            className="footer-img"
            alt="skrill"
            src="https://cdn1.iconfinder.com/data/icons/logos-2/96/Skrill-256.png"
          />
        </span>
      </p>
    </div>
  );
}

export default Footer;
