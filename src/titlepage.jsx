import React from "react";
import Footer from "./footer.jsx";
import Titlerow from "./title-row.jsx";
import Navbar from "./navbar.jsx";

function TitlePage() {
  return (
    <section id="title">
      <Navbar />

      <div className="container-fluid">
        <Titlerow />
        <Footer />
      </div>
    </section>
  );
}

export default TitlePage;
