import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/contact.css";
import wormhole from "/img/wormhole.jpg";
import Design2 from "../Components/Design2";

const Services = () => {
  return (
    <>
      <Navbar />
      <Design2/>
      <section className="service">
        <div className="container d-flex justify-content-center position-relative">
          <img className="worm-img position-absolute" src={wormhole} alt="" />
          <div className="text-group">
          <h1 className="service-heading">Choose</h1>
          <p></p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
