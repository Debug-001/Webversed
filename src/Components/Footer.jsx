import React from "react";
import logo from "../../public/img/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="pb-5">
      <div className="container-fluid px-5 mt-5">
        <div>
          <div className="row">
            <div className="col-sm">
              <div className="logo-section">
                <a href="#">
                  <img
                    className=""
                    style={{ width: "120px" }}
                    src={logo}
                    alt="logo-img"
                  />
                </a>
                <h1 className="px-4 pt-3">Webversed</h1>
              </div>
              <p className="px-5 mx-2 pt-4" style={{fontSize:"1.1rem"}}>
                At Webversed, We focus on bringing your innovative Ideas to
                Life.
              </p>
              <p style={{ color: "#000",fontSize:"1.1rem" }} className="px-5 mx-2">
                #Your Vision, Our Mission: Webversed - Where Ideas Blossom
              </p>
            </div>
            <div className="col-sm pt-4">
              <h1 className="mx-5 pt-3">Company</h1>
              <ul className="footer-link px-5">
                <li className="footer-active hover-underline-animation">Services</li>
                <li className="footer-active hover-underline-animation">Prices</li>
                <li className="footer-active hover-underline-animation">About Us</li>
                <li className="footer-active hover-underline-animation">Career</li>
              </ul>
            </div>
            <div className="col-sm pt-4">
              <h1 className="pt-3">Connect with us</h1>
              <ul className="footer-link px-1">
                <li className="footer-active hover-underline-animation"><FaLinkedin className="mt-1"/>&nbsp;Linkedin</li>
                <li className="footer-active hover-underline-animation"> <GrInstagram className="mt-1"/>&nbsp;Instagram</li>
                <li className="footer-active hover-underline-animation"><FaTwitterSquare className="mt-1"/>&nbsp;Twitter</li>
                <li className="footer-active hover-underline-animation"><FaTelegram className="mt-1"/>&nbsp;Telegram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
