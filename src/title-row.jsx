import React from "react";

import Titlecol1 from "./title-text.jsx";

function Titlerow() {
  return (
    <div className="row">
      <Titlecol1 />
      <div className="col-lg-6 ">
        <img
          src="https://craftwork-images.b-cdn.net/wp-content/uploads/no-gravity-13-bad-gateway.png"
          className="title-image"
          alt="title-img"
        />
      </div>
    </div>
  );
}
export default Titlerow;
