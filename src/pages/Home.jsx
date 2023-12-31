import React, { useRef, Component, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import web from "/img/web.png";
import seo from "/img/seo.jpg";
import ui from "/img/ui.png";
import card1 from "/img/card1.png";
import dash from "/img/dash.png";
import dash2 from "/img/dash2.png";
import boost from "/img/boost.svg";
import headerweb from "/img/header-web.svg";
import { BiSolidBookContent } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import BrandSlider from "../Components/BrandSlider";
import { Fade } from "react-awesome-reveal";
import Design from "../Components/Design";

const Home = () => {
  const parallax = useRef();

  const [selectedService, setSelectedService] = useState("");
  const handleServiceSelection = (event, service) => {
    event.preventDefault();
    setSelectedService(service);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Design />
      {/* first section  */}
      <section className="header mt-5">
        <div className="container">
          <div className="header-section">
            <Fade direction="up" triggerOnce>
              <h1 className="text-center">
                Redefining Posibilities: -Transforming Ideas into Reality
              </h1>
            </Fade>
            <div className="sub-header">
              <Fade direction="up">
                <p className="text-center pt-2">
                  Say goodbye to digital challenges as we effortlessly craft
                  websites, enhance user experiences, and optimize search
                  visibility. Seamlessly elevate your online journey with
                  Webversed.
                </p>
              </Fade>
            </div>
            <Fade direction="up">
              <a className="btn btn-primary mt-2" href="#pricing">
                Get quote right now&nbsp; &rarr;
              </a>
            </Fade>
          </div>
        </div>
      </section>

      {/* second section  */}
      <section className="header2">
        <Fade direction="up" triggerOnce>
          <div className="container header2-section">
            <div className="card" style={{ width: "100%", maxWidth: "70rem" }}>
              <div className="card-body1">
                <div className="row px-5">
                  <div className="col">
                    <p className="card-top-heading">VISUALISE IDEAS</p>
                    <h2 className="card-text-heading">
                      Impossible is the new Possible!
                    </h2>
                    <Fade direction="up">
                      <p className="card-text-p pt-3">
                        From building Landing pages to complete E-Commerce
                        Stores, Get top notch UI/UX Designers for your need and
                        all everything to rank up your website #1 using our SEO
                        Service.
                      </p>
                      <div
                        className="btn btn-second"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                      >
                        Get a quote Now!
                      </div>
                    </Fade>
                  </div>

                  <div className="col">
                    <div className="div">
                      <div className="card-images expanding-container">
                        <Fade direction="left">
                          <img
                            src={seo}
                            className="img-1 expanding-image"
                            alt="seo-image"
                          />
                        </Fade>
                        <Fade direction="up">
                          <img
                            src={web}
                            className="img-2 expanding-image"
                            alt="web-image"
                          />
                        </Fade>
                        <Fade direction="right">
                          <img
                            src={ui}
                            className="img-3 expanding-image"
                            alt="ui-image"
                          />
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* black white row col  */}
      <section className="mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col" style={{ backgroundColor: "black" }}>
              <div
                className="seo-svg-container pt-5 mx-5 px-5"
                style={{ marginTop: "3rem" }}
              >
                <img src={boost} alt="boost-svg" />
              </div>
              <Fade direction="up">
                <div className="content-seo px-5">
                  <h1
                    className="mx-5"
                    style={{
                      fontSize: "3.5rem",
                      marginTop: "3rem",
                      color: "white",
                    }}
                  >
                    Boost Your Online Presence with Expert SEO Optimization
                  </h1>
                  <p
                    className="px-5"
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "3rem",
                      color: "rgb(195, 195, 195)",
                    }}
                  >
                    Enhance your website's visibility and drive more organic
                    traffic with our tailored SEO strategies.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col seo-img-col">
              <Fade direction="right">
                <img className="" src={dash} alt="seo-img" />
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="col seo-img-col2">
              <Fade direction="left">
                <img className="px-5" src={dash2} alt="seo-img" />
              </Fade>
            </div>

            <div className="col" style={{ backgroundColor: "black" }}>
              <div
                className="seo-svg-container pt-5 mx-5 px-5"
                style={{ marginTop: "3rem" }}
              >
                <img src={headerweb} alt="boost-svg" />
              </div>
              <div
                className="content-seo px-5"
                style={{ paddingBottom: "5rem" }}
              >
                <Fade direction="up">
                  <h1
                    className="mx-5"
                    style={{
                      fontSize: "3.5rem",
                      marginTop: "3rem",
                      color: "white",
                    }}
                  >
                    Crafting Intuitive and Engaging User Experiences
                  </h1>
                </Fade>
                <Fade direction="up">
                  <p
                    className="px-5"
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "3rem",
                      color: "rgb(195, 195, 195)",
                    }}
                  >
                    Transform your digital platforms with our specialized UI/UX
                    services. We prioritize user-centric designs that elevate
                    your brand and user engagement
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* third <section></section> */}
      <section className="header3">
        <div className="container-fluid">
          <div className="card-header3 mx-5"></div>
        </div>
      </section>

      <section className="newst-section pb-5">
        <div className="container mb-5">
          <Fade direction="up">
            <div className="newst-text text-center">
              <h1>Discover Cutting-Edge Frameworks Integrations</h1>
              <div className="sub-text-newst">
                <p>
                  At Webversed, we've meticulously crafted a comprehensive suite
                  of cutting-edge solutions tailored to elevate your digital
                  presence. Immerse yourself in intuitive UI/UX designs, robust
                  web development frameworks, and meticulous SEO optimization
                  strategies. Our user-centric approach ensures seamless
                  navigation, engaging aesthetics, and enhanced functionality.
                  With Webversed, transform your online experience, drive
                  traffic, and achieve unparalleled growth. Embrace innovation
                  in design and development with Webversed.
                </p>
              </div>
            </div>
          </Fade>

          <div className="row">
            <div className="col">
              <div className="card card2-newst mx-3 mt-5">
                <div className="card-body2">
                  <Fade direction="up">
                    <h1>
                      Innovative
                      <em className="ui-design-text"> UI Designs</em>
                    </h1>
                    <p className="pt-2">
                      Our Innovative designs bring your data to life, offering
                      dynamic and customizable visualization.. Uncover trends,
                      identify insights, and make data-driven webpages appear
                      more to life. With Webversed, you have the power to
                      explore the designs like never before.
                    </p>
                  </Fade>
                  <div className="card-container d-flex justify-content-center">
                    <Fade direction="up">
                      <img src={card1} className="img-card-body2 mt-4" alt="" />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card-group-new">
                <div className="card card-newst mt-5 mx-3">
                  <div className="card-body2">
                  <Fade direction="up">

                    <h1>Strategic Web Development</h1>
                    <p className="pt-2">
                      Unlock the potential of tailored web solutions with
                      Webversed. Navigate intricate digital landscapes with
                      responsive designs, scalable platforms, and optimized
                      functionalities. Partner with Webversed to ensure your
                      online platform aligns with your business vision and goals
                    </p>
          </Fade>

                  </div>
                </div>
                <div className="card card-newst mt-5 mx-3">
                  <div className="card-body2">
                  <Fade direction="up">

                    <h1>Optimized SEO Strategies</h1>
                    <p className="pt-2">
                      Harness the power of effective online visibility with
                      Webversed. Dive into comprehensive keyword research,
                      content optimization, and link-building strategies. With
                      Webversed, position your brand at the forefront of search
                      engine results and drive organic traffic effortlessly.
                    </p>
          </Fade>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pricing heading */}
      <section className="pricing" id="pricing">
        <div className="container px-5">
          <div className="heading-div">
            <Fade direction="up">
              <h1 className="pricing-heading ">
                There's Nothing to to hold you back
              </h1>
              <div className="sub-heading-text">
                <p className="text-center pricing-sub">
                  Whether you're a solo professional, a small business, or large
                  coporation, we have a plan that's best for you.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* pricing details  */}
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
                        <IoCheckmark className="check-icon" /> E-commerce Shop{" "}
                      </li>
                      <li>
                        <IoCheckmark className="check-icon" /> Web Management
                      </li>
                      <li>
                        <IoCheckmark className="check-icon" /> Custom Website
                      </li>
                      <li>
                        <IoCheckmark className="check-icon" /> Portoflios
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
                        <IoCheckmark className="check-icon" /> User Research &
                        Strategy
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
                        <IoCheckmark className="check-icon" /> Keyword Research
                        & Strategy
                      </li>
                      <li>
                        <IoCheckmark className="check-icon" /> On/Off Page Seo
                      </li>
                      <li>
                        <IoCheckmark className="check-icon" /> Organic Search
                        Traffic
                      </li>
                      <li>
                        <IoCheckmark className="check-icon" /> Shopify/Ecommerce
                        SEO
                      </li>
                      <li>
                        <IoCheckmark className="check-icon" /> Technical SEO
                      </li>
                      <li>
                        <IoCheckmark className="check-icon" /> Content Writing
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
                    Send your Query to us. &nbsp; We'll handle the rest.
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
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="number" className="col-form-label">
                        Contact No:
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="contact-num"
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
                            display: selectedService ? "inline-block" : "none",
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
                                handleServiceSelection(e, "SEO Optimisation")
                              }
                            >
                              SEO Optimisation
                            </button>
                          </li>

                          {/* <li>
                            <button
                              className="dropdown-item"
                              onClick={() =>
                                handleServiceSelection("Web Development")
                              }
                            >
                              Web Development
                            </button>
                          </li>

                          <li>
                            <hr className="dropdown-divider" />
                          </li>

                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() =>
                                handleServiceSelection("UI/UX Design")
                              }
                            >
                              UI/UX Design
                            </button>
                          </li>

                          <li>
                            <hr className="dropdown-divider" />
                          </li>

                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() =>
                                handleServiceSelection("SEO Optimisation")
                              }
                            >
                              SEO Optimisation
                            </button>
                          </li> */}
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
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container brand-section">
        <BrandSlider />
      </section>

      <Footer />
    </>
  );
};

export default Home;
