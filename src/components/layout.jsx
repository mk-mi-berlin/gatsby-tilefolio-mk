import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <section class="section">
      <div className="container is-fluid">
        <NavBar />
        <main className="container is-fluid">{children}</main>
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
