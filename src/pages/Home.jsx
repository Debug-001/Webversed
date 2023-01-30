import React from 'react'

const Home = () => {
  return (
    <>
      {/* Start: Navbar Centered Links */}
      <nav
        className="navbar navbar-dark navbar-expand-md sticky-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-bezier"
              >
                <path
                  fillRule="evenodd"
                  d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                ></path>
                <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
              </svg>
            </span>
            <span>WebVersed</span>
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item" />
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End: Navbar Centered Links */}
      <header className="bg-dark">
        {/* Start: Hero Clean Reverse */}
        <div className="container pt-4 pt-xl-5">
          <div className="row pt-5">
            <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
              <div className="text-center">
                <p className="fw-bold text-success mb-2">
                  Are you a student with no Portfolio?
                </p>
                <h1 className="fw-bold">&nbsp; #1 Rated Portfolio service</h1>
              </div>
            </div>
            <div className="col-12 col-lg-10 mx-auto">
              <div
                className="position-relative"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    flex: "0 0 45%",
                    transform: "translate3d(-15%, 35%, 0)"
                  }}
                >
                  <img
                    className="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.8"
                    src="src/pages/assets/img/products/4789144.jpg"
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    flex: "0 0 45%",
                    transform: "translate3d(-5%, 20%, 0)"
                  }}
                >
                  <img
                    className="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.4"
                    src="src/pages/assets/img/products/4912625.jpg"
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    flex: "0 0 60%",
                    transform: "translate3d(0, 0%, 0)"
                  }}
                >
                  <img
                    className="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.25"
                    src="src/pages/assets/img/products/4676498.jpg"
                    style={{ width: "400.6px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End: Hero Clean Reverse */}
      </header>


      {/* Start: Brands */}
      <section className="py-5">
        <div className="container text-center py-5">
          <p className="mb-4" style={{ fontSize: "1.6rem" }}>
            Used by&nbsp;
            <span className="text-success">
              <strong>1200+</strong>
            </span>
            &nbsp;of the students from across the nation.
          </p>
          <a href="#"> </a>
          <a href="#">
            {" "}
            <img
              className="m-3"
              src="src/pages/assets/img/brands/Symbiosis-Golden-Jubilee-logo.png"
            />
          </a>
          <a href="#">
            {" "}
            <img className="m-3" src="src/pages/assets/img/brands/logo.png" />
          </a>
          <a href="#"> </a>
          <a href="#"> </a>
          <img
            className="m-3"
            src="src/pages/assets/img/brands/Indian_Institute_of_Technology_Roorkee_logo.png"
            style={{ width: 222 }}
          />
        </div>
      </section>
      {/* End: Brands */}


      <section>
        {/* Start: Features Cards */}
        <div className="container bg-dark py-5">
          <div className="row">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold text-success mb-2">Our Services</p>
              <h3 className="fw-bold">Plans we offer!</h3>
            </div>
          </div>
          <div className="py-5 p-lg-5">
            <div
              className="row row-cols-1 row-cols-md-2 mx-auto"
              style={{ maxWidth: 900 }}
            >
              <div className="col mb-5">
                <div className="card shadow-sm">
                  <div className="card-body px-4 py-5 px-md-5">
                    <div
                      className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                      style={{ top: "1rem", right: "1rem", position: "absolute" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-person text-success"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                      </svg>
                    </div>
                    <h5 className="fw-bold card-title">Basic Plan</h5>
                    <p className="text-muted card-text mb-4">
                      Select from 50+ amazing&nbsp; presets. Free hosting and
                      domain. Delivers within 2 business days. Rs.899 only!
                    </p>
                    <a
                      className="btn btn-primary shadow"
                      role="button"
                      href="/services"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card shadow-sm">
                  <div className="card-body px-4 py-5 px-md-5">
                    <div
                      className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                      style={{ top: "1rem", right: "1rem", position: "absolute" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-person-plus text-success"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                        <path
                          fillRule="evenodd"
                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                        ></path>
                      </svg>
                    </div>
                    <h5 className="fw-bold card-title">Premium Plan&nbsp;</h5>
                    <p
                      className="text-muted card-text mb-4"
                      style={{ color: "var(--bs-light)" }}
                    >
                      Select any premium pre-set to begin with. Full user
                      customisation. 100% Uniqueness. Rs. 2000 only!
                    </p>
                    <a
                      className="btn btn-primary shadow"
                      role="button"
                      href="/services"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End: Features Cards */}
      </section>

      <section />


      <section className="py-5 mt-5">
        {/* Start: Testimonials */}
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold text-success mb-2">Testimonials</p>
              <h2 className="fw-bold">Reviews from our top clients</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
            <div className="col mb-4">
              <div className="d-flex flex-column align-items-center align-items-sm-start">
                <p className="bg-dark border rounded border-dark p-4">
                  "Excellent web design and seamless user experience. Would
                  definitely recommend."
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width={50}
                    height={50}
                    src="src/pages/assets/img/team/guest-male.png"
                  />
                  <div>
                    <p className="fw-bold text-primary mb-0">Rhitik Raj</p>
                    <p className="text-muted mb-0">CS Minor (Delhi University</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="d-flex flex-column align-items-center align-items-sm-start">
                <p className="bg-dark border rounded border-dark p-4">
                  "User-friendly interface, very minimal design and great support
                  team. Highly recommended."
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width={50}
                    height={50}
                    src="src/pages/assets/img/team/guest-male.png"
                  />
                  <div>
                    <p className="fw-bold text-primary mb-0">Radhika Singh</p>
                    <p className="text-muted mb-0">
                      Law student (Christ University)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="d-flex flex-column align-items-center align-items-sm-start">
                <p className="bg-dark border rounded border-dark p-4">
                  "Best looking portfolio and customizable, love the options
                  available."
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width={50}
                    height={50}
                    src="src/pages/assets/img/team/guest-male.png"
                  />
                  <div>
                    <p className="fw-bold text-primary mb-0">Ishita Walia</p>
                    <p className="text-muted mb-0">
                      Phys Minor (Christ University)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End: Testimonials */}
      </section>
      {/* Start: Contact Details */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold text-success mb-2">Contacts</p>
              <h2 className="fw-bold">How you can reach us</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div>
                <form className="p-3 p-xl-4" method="post">
                  {/* Start: Success Example */}
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      id="name-1"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  {/* End: Success Example */}
                  {/* Start: Error Example */}
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      id="email-1"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  {/* End: Error Example */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="message-1"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary shadow d-block w-100"
                      type="submit"
                    >
                      Send{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
              <div className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-whatsapp"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </div>
                  <div className="px-2">
                    <h6 className="fw-bold mb-0">Whatsapp</h6>
                    <p className="text-muted mb-0">Instant reply</p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-envelope"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="px-2">
                    <h6 className="fw-bold mb-0">Email</h6>
                    <p className="text-muted mb-0">Replies in 2-3 business days</p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-telegram"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                    </svg>
                  </div>
                  <div className="px-2">
                    <h6 className="fw-bold mb-0">Telegram</h6>
                    <p className="text-muted mb-0">Replies within 2-5mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End: Contact Details */}
      {/* Start: Newsletter Subscription Color */}
      <section className="py-5">
        <div className="container">
          <div className="bg-dark border rounded border-dark d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
            <div className="text-center text-lg-start py-3 py-lg-1">
              <h2 className="fw-bold mb-2">
                Subscribe to our newsletter Codersbake!
              </h2>
            </div>
            <form
              className="d-flex justify-content-center flex-wrap flex-lg-nowrap"
              method="post"
            >
              <div className="my-2">
                <input
                  className="border rounded-pill shadow-sm form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="my-2">
                <button className="btn btn-primary shadow ms-2" type="submit">
                  Subscribe{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* End: Newsletter Subscription Color */}
      {/* Start: Footer Multi Column */}
      <footer className="bg-dark">
        <div className="container py-4 py-lg-5">
          <div className="row justify-content-center">
            {/* Start: Services */}
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
              <h3 className="fs-6 fw-bold">Services</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            {/* End: Services */}
            {/* Start: About */}
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
              <h3 className="fs-6 fw-bold">About</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Legacy</a>
                </li>
              </ul>
            </div>
            {/* End: About */}
            {/* Start: Careers */}
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
              <h3 className="fs-6 fw-bold">Careers</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Job openings</a>
                </li>
                <li>
                  <a href="#">Employees</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
              </ul>
            </div>
            {/* End: Careers */}
            {/* Start: Social Icons */}
            <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
              <div className="fw-bold d-flex align-items-center mb-2">
                <span className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-bezier"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                    ></path>
                    <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                  </svg>
                </span>
                <span>WebVersed</span>
              </div>
              <p className="text-muted">Bringing your ideas to life!</p>
            </div>
            {/* End: Social Icons */}
          </div>
          <hr />
          <div className="text-muted d-flex justify-content-between align-items-center pt-3">
            <p className="mb-0">Copyright © 2023 WebVersed</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-telegram"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                </svg>
              </li>
              <li className="list-inline-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-twitter"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg>
              </li>
              <li className="list-inline-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-instagram"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* End: Footer Multi Column */}
    </>

  )
}

export default Home
