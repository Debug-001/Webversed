import React, { useEffect } from "react";
import logo from "/img/logo.png";

const Navbar = () => {
  useEffect(() => {
    var hamburger = document.querySelector(".hamburger");
    const handleClick = () => {
      hamburger.classList.toggle("is-active");
    };
    hamburger.addEventListener("click", handleClick);

    return () => {
      hamburger.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="logo-section">
          <a href="/">
            <img
              className=""
              style={{ width: "55px" }}
              src={logo}
              alt="logo-img"
            />
          </a>
          <a href="/">
            <h2 className="logo-text mx-3 pt-2">Webversed</h2>
          </a>
        </div>
        <button
          className="hamburger hamburger--emphatic navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a
                className="nav-link active hover-underline-animation"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active hover-underline-animation"
                href="/services"
              >
                Services
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active hover-underline-animation"
                href="/pricing"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active hover-underline-animation"
                href="/career"
              >
                Career
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active hover-underline-animation"
                href="/about"
              >
                About Us
              </a>
            </li>
          </ul>
          <a href="/contact">
            <div className="btn btn-primary">Contact Us</div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
