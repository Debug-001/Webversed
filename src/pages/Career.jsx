import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Fade } from "react-awesome-reveal";
import Design2 from "../Components/Design2";
import "./index.css";

const Career = () => {
  function handleOnClick() {
    return alert("Job not available the moment, keep checking");
  }

  useEffect(() => {
    document.title = `Careers`;
  }, []);

  return (
    <>
      <Navbar />
      <Design2/>
      <section className="">
        <div className="container pt-5">
          <div className="text-heading d-flex flex-column justify-content-center align-items-center">
            <h1 className="font-weight-bolder text0-center display-3">
              Career Oppurtunities
            </h1>
            <p
              className="h5 w-50 text-center pt-3"
              style={{ color: "#6b6b6b" }}
            >
              Your Odyssey of Success Starts Now: Venture into a World of Career
              Triumphs and Limitless Opportunities
            </p>
          </div>

          <div className="accordion-container d-flex justify-content-center align-items-center mt-5 pb-5">
            <div
              className="accordion "
              id="accordionExample"
              style={{ width: "75rem" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    HR Executive
                  </button>
                  <p className="h6 mx-4" style={{ color: "#6b6b6b" }}>
                    Closed position
                  </p>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body" id="second-accordion">
                    <div className="row pb-3">
                      <div className="col-sm-2" style={{ color: "#010101" }}>
                        Job Description
                      </div>
                      <div className="col-sm-8">
                        <p className="h5" style={{ color: "#6b6b6b" }}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quo earum aspernatur porro consectetur quos,
                          ipsum recusandae laborum error dignissimos quisquam
                          aut est eos, tempore enim? Aliquam error perspiciatis
                          assumenda doloribus!
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row pt-4">
                      <div className="col-sm-2" style={{ color: "#010101" }}>
                        Requirements
                      </div>
                      <div className="col-sm-8">
                        <p className="h5" style={{ color: "#6b6b6b" }}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quo earum aspernatur porro consectetur quos,
                          ipsum recusandae laborum error dignissimos quisquam
                          aut est eos, tempore enim? Aliquam error perspiciatis
                          assumenda doloribus!
                        </p>
                      </div>
                    </div>
                    <button className="btn mt-5" onClick={handleOnClick}>
                      Apply here!
                    </button>
                  </div>
                </div>
              </div>

              <div className="accordion-item mt-5">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Frontend Developer
                  </button>
                  <p className="h6 mx-4" style={{ color: "#6b6b6b" }}>
                    Closed position
                  </p>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body" id="second-accordion">
                    <div className="row pb-3">
                      <div className="col-sm-2" style={{ color: "#010101" }}>
                        Job Description
                      </div>
                      <div className="col-sm-8">
                        <p className="h5" style={{ color: "#6b6b6b" }}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quo earum aspernatur porro consectetur quos,
                          ipsum recusandae laborum error dignissimos quisquam
                          aut est eos, tempore enim? Aliquam error perspiciatis
                          assumenda doloribus!
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row pt-4">
                      <div className="col-sm-2" style={{ color: "#010101" }}>
                        Requirements
                      </div>
                      <div className="col-sm-8">
                        <p className="h5" style={{ color: "#6b6b6b" }}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quo earum aspernatur porro consectetur quos,
                          ipsum recusandae laborum error dignissimos quisquam
                          aut est eos, tempore enim? Aliquam error perspiciatis
                          assumenda doloribus!
                        </p>
                      </div>
                    </div>
                    <button className="btn mt-5" onClick={handleOnClick}>
                      Apply here!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-5 contact-below pb-5">
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

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Career;
