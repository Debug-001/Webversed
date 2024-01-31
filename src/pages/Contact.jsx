import React, { useState,useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import contactimg from "/img/contact-img.png";
import "../styles/contact.css";
import PhoneInput from "react-phone-number-input";
import { Fade } from "react-awesome-reveal";
import Design from "../Components/Design";

const Contact = () => {
  const [value, setValue] = useState();

  
  useEffect(() => {
    document.title = `Contact Us`;
  },[]);

  return (
    <>
      <Navbar />
      <Design />
      <section className="contact">
        <div className="container  p-5">
          <div className="row">
            <div className="col-sm-6">
              <div className="contact-text">
                <Fade direction="left">
                  <h1> Get in Touch with Us</h1>
                  <p className="pt-2">
                    We're here to help. Whether you have questions, need
                    assistance, or just want to connect, don't hesitate to reach
                    out to us.
                  </p>
                </Fade>
              </div>
              <div className="contact-form">
                <Fade direction="left">
                  <input
                    className="input-feilds"
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Enter your name"
                  />
                </Fade>
                <Fade direction="left">
                  <input
                    className="input-feilds"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                  />
                </Fade>
                <Fade direction="left">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Enter your Contact Number"
                  />
                </Fade>

                {/* <PhoneInput
                 className="phip"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                /> */}
                <Fade direction="left">
                  <input
                    style={{ minHeight: "196px" }}
                    className="input-feilds"
                    type="text"
                    name="message"
                    id="message"
                    placeholder="How can we help you"
                  />
                </Fade>
                <Fade direction="left">
                  <button
                    className="btn contact-btn"
                    //  onClick={submit}
                  >
                    Submit
                  </button>
                </Fade>
              </div>
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-center">
              <Fade direction="right">
                <img className="contact-img mt-5" src={contactimg} alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="container d-flex justify-content-center">
          <div className="qa-text">
            <Fade direction="up">
            <h1 className="text-center">Common Questions and Answers</h1>
            <p className="pt-2 px-4">
              Looking for quick answers? Check out our FAQ for concise
              explanations to common questions. Can't find what you're looking
              for? Our support team is just a message away, ready to assist you.
            </p>
            </Fade>
          </div>
        </div>

        <div className="d-flex gap-5 mt-5 justify-content-center">
          <div class="accordion" id="accordionExample1">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne1"
                  aria-expanded="true"
                  aria-controls="collapseOne1"
                >
                  What will my Project Cost?
                </button>
              </h2>
              <div
                id="collapseOne1"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample1"
              >
                <div class="accordion-body">
                  The Price of your Project depends on both the Complexity and
                  the Type of Webpage you need. Let me know about the Details of
                  your Project and I'll be able to create an Offer tailored to
                  your needs.
                </div>
              </div>
            </div>
          </div>

          <div className="accordian second-accord" id="accordionExample2">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo2"
                  aria-expanded="false"
                  aria-controls="collapseTwo2"
                >
                  Can you help with search engine optimization (SEO)?
                </button>
              </h2>
              <div
                id="collapseTwo2"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample2"
              >
                <div class="accordion-body">
                  Absolutely! We incorporate SEO best practices into our website
                  design and content to improve your site's visibility on search
                  engines. Additionally, we offer ongoing SEO services to help
                  you rank higher and attract more organic traffic.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-5 mt-5 justify-content-center">
          <div class="accordion" id="accordionExample1">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne3"
                  aria-expanded="true"
                  aria-controls="collapseOne3"
                >
                  How do you ensure the security of my website?
                </button>
              </h2>
              <div
                id="collapseOne3"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample1"
              >
                <div class="accordion-body">
                  Security is a top priority for us. We implement robust
                  security measures, such as SSL certificates, regular backups,
                  and security audits, to protect your website from threats and
                  vulnerabilities.
                </div>
              </div>
            </div>
          </div>

          <div className="accordian second-accord" id="accordionExample2">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo4"
                  aria-expanded="false"
                  aria-controls="collapseTwo4"
                >
                  Can you integrate third-party tools and plugins into my
                  website?
                </button>
              </h2>
              <div
                id="collapseTwo4"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample2"
              >
                <div class="accordion-body">
                  Yes, we can integrate various third-party tools, plugins, and
                  APIs to enhance your website's functionality. Whether you need
                  payment gateways, CRM integration, or social media plugins,
                  we've got the expertise to integrate them seamlessly.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-5 mt-5 justify-content-center">
          <div class="accordion" id="accordionExample1">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne5"
                  aria-expanded="true"
                  aria-controls="collapseOne5"
                >
                  What types of websites can you create?
                </button>
              </h2>
              <div
                id="collapseOne5"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample1"
              >
                <div class="accordion-body">
                  We specialize in designing and developing various types of
                  websites, including e-commerce sites, informational blogs,
                  portfolio websites, and more. Let us know your specific
                  requirements, and we'll tailor our services to meet your
                  needs.
                </div>
              </div>
            </div>
          </div>

          <div className="accordian second-accord" id="accordionExample2">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo6"
                  aria-expanded="false"
                  aria-controls="collapseTwo6"
                >
                  How long does it typically take to complete a website?
                </button>
              </h2>
              <div
                id="collapseTwo6"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample2"
              >
                <div class="accordion-body">
                  The timeline for completing a website depends on its
                  complexity and features. Generally, a simple website can be
                  completed within a few weeks, while more complex projects may
                  take several months. We'll provide you with a detailed
                  timeline after discussing your project requirements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container contact-below">
        <div className="card mx-2">
          <div className="card-body-con">
            <div className="row">
              <div className="col mx-5 pt-5 pb-4">
              <Fade direction="up">        
                <h2 className="">Build your dream with Webversed</h2>
              </Fade>
              <Fade direction="up">
                <p className="">
                  We're here to help you scale your dream business the
                  boundaries of financial success. Contact us now and get it
                  done right now.
                </p>
              </Fade>
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <div className="btn-container">
                  <Fade direction="up">
                  <a
                    href="/"
                    className="btn btn-primary"
                    style={{
                      width: "20rem",
                      padding: "1.3rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    Get Started for Free
                  </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
