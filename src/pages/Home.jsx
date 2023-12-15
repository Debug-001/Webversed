import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Fade from "react-reveal/Fade";
import web from "/img/web.png";
import seo from "/img/seo.jpg";
import ui from "/img/ui.png";
import bg from "/img/fg.png";
import fg from "/img/bg.png";
import { BiSolidBookContent } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import {ParallaxProvider} from 'react-scroll-parallax'


const Home = () => {
  return (
    <>
      <Navbar />
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
      <section className="header2 ">
        <Fade bottom>
          <div className="container header2-section">
            <div className="card" style={{ width: "70rem" }}>
              <div className="card-body">
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

      <section className="header3">
        <div className="container-fluid">
          <div className="card-header3">
          <ParallaxProvider>
          <ParallaxBanner
      layers={[
        { image: bg, speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
        { image: fg, speed: -10 },
      ]}
      className="aspect-[2/1]"
    />
          </ParallaxProvider>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <Fade bottom>
            <h1 className="pricing-heading text-center">
              There's Nothing to to hold you back
            </h1>
            <p className="text-center pricing-sub">
              Whether you're a solo professional, a small business, or large
              coporation, we have a plan that's best for you.
            </p>
          </Fade>
          <div className="card-group">
            <Fade bottom>
              <div className="card" style={{ width: "15rem" }}>
                <div className="card-body">
                  <div className="card-header-content d-flex justify-content-center align-items-center">
                    <TbWorldWww size={30} />
                    <h1 className="mx-2 pt-2">Website Building</h1>
                  </div>
                  <Fade bottom>
                    <ul className="pricing-nav">
                      <li>Landing Pages</li>
                      <li>Multi-Page Websites</li>
                      <li>E-commerce Shop </li>
                      <li>Web Management</li>
                      <li>Portoflios</li>
                      <li>Custom Website</li>
                    </ul>
                    <div className="btn btn-primary">Know More!</div>
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                  <div className="card-header-content d-flex justify-content-center align-items-center">
                    <MdOutlineDesignServices size={30} />
                    <h1 className="mx-2 pt-2">UX/UI Designing</h1>
                  </div>
                  <Fade bottom>
                    <ul className="pricing-nav">
                      <li>User Research & Strategy</li>
                      <li>App designing</li>
                      <li>Web Page Designing</li>
                      <li>CX, UX & BX Design</li>
                      <li>Portoflio Designing</li>
                      <li>Custom Work </li>
                    </ul>
                    <div className="btn btn-primary">Know More!</div>
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                  <div className="card-header-content d-flex justify-content-center align-items-center">
                    <BiSolidBookContent size={30} />
                    <h1 className="mx-2 pt-2">SEO Optimisation</h1>
                  </div>
                  <Fade bottom>
                    <ul className="pricing-nav">
                      <li>Keyword Research & Strategy</li>
                      <li>On/Off Page Seo</li>
                      <li>Organic Search Traffic</li>
                      <li>Shopify/Ecommerce SEO</li>
                      <li>Technical SEO</li>
                      <li>Content Writing</li>
                    </ul>
                    <div className="btn btn-primary">Know More!</div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
