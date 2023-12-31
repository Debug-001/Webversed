import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import contactimg from "/img/contact-img.png";
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
            <div className="col-sm-6">
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
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter your Contact Number"
                />
                {/* <PhoneInput
                 className="phip"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                /> */}
                <input
                  style={{ minHeight: "196px" }}
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
            <div className="col-sm-6 d-flex align-items-center justify-content-center">
              <img className="contact-img mt-5" src={contactimg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="container d-flex justify-content-center">
          <div className="qa-text">
            <h1 className="text-center">Common Questions and Answers</h1>
            <p className="pt-2 px-4">
              Looking for quick answers? Check out our FAQ for concise
              explanations to common questions. Can't find what you're looking
              for? Our support team is just a message away, ready to assist you.
            </p>
          </div>
        </div>

        <div className="faq-group d-flex gap-5 justify-content-center">

          <div className="faq">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What will my Project Cost?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    The Price of your Project depends on both the Complexity and
                    the Type of Webpage you need. Let me know about the Details
                    of your Project and I'll be able to create an Offer tailored
                    to your needs.
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="faq2">
              <div className="accordian" id="accordianExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
