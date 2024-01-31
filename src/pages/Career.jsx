import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
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
      <section className="bg-light">
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Career;
