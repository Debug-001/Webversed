import React, { useRef,Component  } from "react";
import Slider from "react-slick";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Fade from "react-reveal/Fade";
import web from "/img/web.png";
import seo from "/img/seo.jpg";
import ui from "/img/ui.png";
import dash from "/img/dash.png";
import dash2 from "/img/dash2.png";
import boost from "/img/boost.svg";
import headerweb from "/img/header-web.svg";
import { BiSolidBookContent } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

const Home = () => {
  const parallax = useRef();
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Navbar />
      {/* first section  */}
      <section className="header mt-5">
        <div className="container">
          <div className="header-section">
            <Fade bottom>
              <h1 className="text-center">
                Redefining Posibilities: -Transforming Ideas into Reality
              </h1>
            </Fade>
            <div className="sub-header">
              <Fade bottom>
                <p className="text-center pt-2">
                  Say goodbye to digital challenges as we effortlessly craft
                  websites, enhance user experiences, and optimize search
                  visibility. Seamlessly elevate your online journey with
                  Webversed.
                </p>
              </Fade>
            </div>
            <Fade bottom>
              <div className="btn btn-primary mt-2">
                Get quote right now&nbsp; &rarr;
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* second section  */}
      <section className="header2 ">
        <Fade bottom>
          <div className="container header2-section">
            <div className="card" style={{ width: "70rem" }}>
              <div className="card-body1">
                <div className="row px-5">
                  <div className="col">
                    <p className="card-top-heading">VISUALISE IDEAS</p>
                    <h2 className="card-text-heading">
                      Impossible is the new Possible!
                    </h2>
                    <Fade bottom>
                      <p className="card-text-p pt-3">
                        From building Landing pages to complete E-Commerce
                        Stores, Get top notch UI/UX Designers for your need and
                        all everything to rank up your website #1 using our SEO
                        Service.
                      </p>
                      <div className="btn btn-second">Get a quote Now!</div>
                    </Fade>
                  </div>

                  <div className="col">
                    <div className="div">
                      <div className="card-images">
                        <Fade left>
                          <img src={seo} className="img-1" alt="seo-image" />
                        </Fade>
                        <Fade top>
                          <img src={web} className="img-2" alt="web-image" />
                        </Fade>
                        <Fade right>
                          <img src={ui} className="img-3" alt="ui-image" />
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
            </div>
            <div className="col seo-img-col">
              <img src={dash} alt="seo-img" />
            </div>
          </div>
          <div className="row">
            <div className="col seo-img-col2">
              <img className="px-5" src={dash2} alt="seo-img" />
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
                <p
                  className="px-5"
                  style={{
                    fontSize: "1.2rem",
                    marginTop: "3rem",
                    color: "rgb(195, 195, 195)",
                  }}
                >
                  Transform your digital platforms with our specialized UI/UX
                  services. We prioritize user-centric designs that elevate your
                  brand and user engagement
                </p>
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

      {/* pricing heading */}
      <section className="pricing">
        <div className="container px-5">
          <div className="heading-div">
            <Fade bottom>
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
            <Fade bottom>
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
                  <Fade bottom>
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
                      <li style={{ color: "#3b3b3b" }}>
                        <IoCheckmark className="check-icon" /> Portoflios
                      </li>
                    </ul>
                    <div className="btn btn-third">Know More!</div>
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade bottom>
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
                  <Fade bottom>
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
                      <li style={{ color: "#3b3b3b" }}>
                        <IoCheckmark className="check-icon" /> Portoflio
                        Designing
                      </li>
                    </ul>
                    <div className="btn btn-third">Know More!</div>
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade bottom>
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
                    <BiSolidBookContent size={35} />
                  </div>
                  <div className="card-header-content d-flex justify-content-start align-items-center">
                    <h1 className=" pt-4">SEO Optimisation</h1>
                  </div>
                  <Fade bottom>
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
                      <li style={{ color: "#3b3b3b" }}>
                        <IoCheckmark className="check-icon" /> Content Writing
                      </li>
                    </ul>
                    <div className="btn btn-third">Know More!</div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* our partner brands  */}
      <section className="mt-5 mb-5">
        <div className="">
        {/* <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
