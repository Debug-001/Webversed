import React, { useEffect } from "react";
import logo from "/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { text: 'Home', to: '/' },
    { text: 'Services', to: '/services' },
    { text: 'Pricing', to: '/pricing' },
    { text: 'Career', to: '/career' },
    { text: 'About Us', to: '/about' },
  ];


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
          <Link to="/">
            <img
              className=""
              style={{ width: "55px" }}
              src={logo}
              alt="logo-img"
            />
          </Link>
          <Link to="/">
            <h2 className="logo-text pt-2">Webversed</h2>
          </Link>
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
      {navItems.map((item, index) => (
        <li className="nav-item mx-3" key={index}>
          <Link
            className="nav-link active hover-underline-animation"
            aria-current="page"
            to={item.to}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
          <Link to="/contact">
            <button className="btn btn-primary contact-btn-nav">Contact Us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
