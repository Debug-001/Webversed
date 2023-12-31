import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/contact.css";
import PhoneInput from "react-phone-number-input";

const Contact = () => {
  const [value, setValue] = useState();

  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="container  p-5">
          <div className="row">
            <div className="col">
              <div className="contact-text">
                <h1> Get in Touch with Us</h1>
                <p className="pt-2">
                  We're here to help. Whether you have questions, need
                  assistance, or just want to connect, don't hesitate to reach
                  out to us.
                </p>
              </div>
              <div className="contact-form">
                <input
                  className="input-feilds"
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Enter your name"
                />
                <input
                  className="input-feilds"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                />
                <PhoneInput
                  inputClass="custom-phone-input"
                  containerClass="custom-phone-input-container"
                  buttonClass="custom-phone-input-button"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                />
                <input
                  className="input-feilds"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="How can we help you"
                />
                <button
                  className="btn contact-btn"
                  //  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="col">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default Contact;
