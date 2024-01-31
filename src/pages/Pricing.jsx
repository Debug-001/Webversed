import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Fade } from "react-awesome-reveal";
import { BiSolidBookContent } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import Design2 from "../Components/Design2";
import { addQueryToFirestore } from "../firebase";

const Pricing = () => {

  useEffect(() => {
    document.title = `Webversed | Pricing`;
  },[]);

  const [name, setName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      setName("");
      setContactNum("");
      setSelectedService("");
      setMessage("");

      await addQueryToFirestore({
        name,
        contactNum,
        selectedService,
        message,
      });
      alert('Your response has been recorded. Expect contact soon!')
    } catch (error) {
      console.error("Error submitting query: ", error);
    }
  };

  const handleServiceSelection = (event, service) => {
    event.preventDefault();

    setSelectedService(service);
  };

  return (
    <>
      <Navbar />
      <Design2 />
      <section className="pricing-section" id="pricing">
        <div className="text-group p-5">
          <h1 className="display-4 font-weight-bold">
            Flexible Plans that suits your needs
          </h1>
          <p className="pt-3 pb-1">
            At Webversed, we believe in providing pricing plans that adapt to
            your unique requirements. Our flexible pricing options ensure that
            you get precisely what you need while maintaining control over your
            budget. Whether you're a small startup or a large enterprise, our
            pricing is designed to accommodate every business, so you can get
            started with confidence.
          </p>
        </div>

        <div className="pricing-group">
          <section>
            <div className="container">
              <div className="card-group">
                <Fade direction="up" triggerOnce>
                  <div
                    className="card"
                    style={{
                      width: "20rem",
                      border: "1px solid black",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="card-body1">
                      <div className="text-center pricing-header-logo">
                        <TbWorldWww size={35} />
                      </div>
                      <div className="card-header-content d-flex justify-content-start align-items-center">
                        <h1 className="pt-4">Website Building</h1>
                      </div>
                      <Fade direction="up">
                        <ul className="pricing-nav">
                          <li>
                            <IoCheckmark className="check-icon" /> Landing Pages
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Multi-Page
                            Websites
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> E-commerce
                            Shop{" "}
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Web
                            Management
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Custom
                            Website
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" />
                            Feature Integration
                          </li>
                        </ul>
                        <div
                          className="btn btn-third"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Know More!
                        </div>
                      </Fade>
                    </div>
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce>
                  <div
                    className="card"
                    style={{
                      width: "20rem",
                      border: "1px solid black",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="card-body1">
                      <div className="text-center pricing-header-logo">
                        <MdOutlineDesignServices size={35} />
                      </div>
                      <div className="card-header-content d-flex justify-content-start align-items-center">
                        <h1 className="pt-4">UX/UI Designing</h1>
                      </div>
                      <Fade direction="up">
                        <ul className="pricing-nav">
                          <li>
                            <IoCheckmark className="check-icon" /> User Research
                            & Strategy
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> App designing
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Web Page
                            Designing
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> CX, UX & BX
                            Design
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Custom Work{" "}
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Portoflio
                            Designing
                          </li>
                        </ul>
                        <div
                          className="btn btn-third"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Know More!
                        </div>
                      </Fade>
                    </div>
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce>
                  <div
                    className="card"
                    style={{
                      width: "21.6rem",
                      border: "1px solid black",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="card-body1">
                      <div className="text-center pricing-header-logo">
                        <BiSolidBookContent size={35} />
                      </div>
                      <div className="card-header-content d-flex justify-content-start align-items-center">
                        <h1 className=" pt-4">SEO Optimisation</h1>
                      </div>
                      <Fade direction="up">
                        <ul className="pricing-nav">
                          <li>
                            <IoCheckmark className="check-icon" /> Keyword
                            Research & Strategy
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> On/Off Page
                            Seo
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Organic
                            Search Traffic
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" />{" "}
                            Shopify/Ecommerce SEO
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Technical SEO
                          </li>
                          <li>
                            <IoCheckmark className="check-icon" /> Content
                            Writing
                          </li>
                        </ul>
                        <div
                          className="btn btn-third"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                        >
                          Know More!
                        </div>
                      </Fade>
                    </div>
                  </div>
                </Fade>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Send your Query to us. &nbsp;We'll handle the rest.
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="name" className="col-form-label">
                            Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="number" className="col-form-label">
                            Contact No:
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="contact-num"
                            value={contactNum}
                            onChange={(e) => setContactNum(e.target.value)}
                          />
                        </div>

                        <div className="mb-3">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-danger dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Select Service Required!
                            </button>
                            <button
                              type="button"
                              className="btn btn-fourth mx-3"
                              style={{
                                display: selectedService
                                  ? "inline-block"
                                  : "none",
                              }}
                            >
                              {selectedService || "Selected service"}
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={(e) =>
                                    handleServiceSelection(e, "Web Development")
                                  }
                                >
                                  Web Development
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={(e) =>
                                    handleServiceSelection(e, "UI/UX Design")
                                  }
                                >
                                  UI/UX Design
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={(e) =>
                                    handleServiceSelection(e, "Custom Services")
                                  }
                                >
                                  Custom Services
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={(e) =>
                                    handleServiceSelection(
                                      e,
                                      "SEO Optimisation"
                                    )
                                  }
                                >
                                  SEO Optimisation
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="message" className="col-form-label">
                            Drop any Additional Message such as your budget etc.
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                      id="btn-modal"
                        type="button"
                        className="btn btn-secondary btn-modal-dismiss"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <div className="container d-flex justify-content-center">
            <div className="qa-text">
              <Fade direction="up">
                <h1 className="text-center">Common Questions and Answers</h1>
                <p className="pt-2 px-4">
                  Looking for quick answers? Check out our FAQ for concise
                  explanations to common questions. Can't find what you're
                  looking for? Our support team is just a message away, ready to
                  assist you.
                </p>
              </Fade>
            </div>
          </div>

          <div className="d-flex gap-5 mt-5 justify-content-center">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
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
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample1"
                >
                  <div className="accordion-body">
                    The Price of your Project depends on both the Complexity and
                    the Type of Webpage you need. Let me know about the Details
                    of your Project and I'll be able to create an Offer tailored
                    to your needs.
                  </div>
                </div>
              </div>
            </div>

            <div className="accordian second-accord" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Absolutely! We incorporate SEO best practices into our
                    website design and content to improve your site's visibility
                    on search engines. Additionally, we offer ongoing SEO
                    services to help you rank higher and attract more organic
                    traffic.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex gap-5 mt-5 justify-content-center">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
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
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample1"
                >
                  <div className="accordion-body">
                    Security is a top priority for us. We implement robust
                    security measures, such as SSL certificates, regular
                    backups, and security audits, to protect your website from
                    threats and vulnerabilities.
                  </div>
                </div>
              </div>
            </div>

            <div className="accordian second-accord" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Yes, we can integrate various third-party tools, plugins,
                    and APIs to enhance your website's functionality. Whether
                    you need payment gateways, CRM integration, or social media
                    plugins, we've got the expertise to integrate them
                    seamlessly.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex gap-5 mt-5 justify-content-center">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
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
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample1"
                >
                  <div className="accordion-body">
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
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    The timeline for completing a website depends on its
                    complexity and features. Generally, a simple website can be
                    completed within a few weeks, while more complex projects
                    may take several months. We'll provide you with a detailed
                    timeline after discussing your project requirements.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-5 contact-below">
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
                      <a href='/pricing'
                        className="btn btn-primary"
                        style={{
                          width: "12rem",
                          padding: "1rem",
                          fontSize: "1rem",
                          marginLeft:"10px",
                          marginBottom:"1.5rem"
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
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
