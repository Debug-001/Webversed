import React, { useState } from 'react'
import logo from '/img/logo.png'
// import { useRef } from 'react';
// import emailjs from '../../node_modules/emailjs-com/cjs/methods/send/send'


const Pay_basic = () => {

//   const form = useRef()
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm('service_pppg1el', 'template_ngf8ish', form.current, 'AZlZAJhJKQa5-Sjf2')
//     e.target.reset()
//   }


  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    number: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value })
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, email, number } = userData
    if (firstName && email && number) {

      const res = fetch(
        'https://webversed-430f8-default-rtdb.firebaseio.com/userData.json',
        {
          method: "POST",
          Headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            email,
            number
          })
        }
      )
      if (res) {
        setUserData({
          firstName: "",
          email: "",
          number: "",
        })
        alert("Thankyou! We will contact your within 6hrs")
      } else {
        alert("Please fill the all the fields")
      }
      } else {
        alert("Please fill the details before sending")
    }
  }


  return (
    <>
      {/* Start: Navbar Centered Links */}
      <nav
        className="navbar navbar-dark navbar-expand-md sticky-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img className="nav_logo" src={logo} alt="" />
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
                <a className="nav-link" href="/">
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
                <a className="nav-link active" href="/contact">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End: Navbar Centered Links */}
      {/* Start: Contact Details */}
      <section className="py-5">
        {/* Start: Contact Details */}
        <section id="contact" className="py-3">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <p className="fw-bold text-success">
                  Pay for your Premium Bundle!
                </p>
                <h2 className="fw-bold">Pay and fill the details below!</h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-xl-4">
                <div>
                  <form className="p-3 p-xl-4" method="POST">
                  {/* <form ref={form} className="p-3 p-xl-4" method="POST"> */}
                    <img
                      className="rounded mx-auto d-block"
                      src="img/WhatsApp%20Image%202023-01-30%20at%2016.38.10.jpg"
                      style={{
                        width: 208,
                        height: "216.9px",
                        marginBottom: 29,
                      }}
                    />
                    <p className='fw-light  mx-auto text-center  text-success'>
                     UPI - haider@sliceaxis 
                    </p>
                    <a
                      className="btn btn-primary shadow d-block w-100"
                      role="button"
                      style={{ marginBottom: 63 }}
                      href="https://paytm.me/MseM-8Z"
                    >
                      Pay Rs. 1499
                    </a>
                    {/* Start: Success Example */}
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        id="name-1"
                        name="firstName"
                        placeholder="Name"
                        value={userData.firstName}
                        onChange={postUserData}
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
                        value={userData.email}
                        onChange={postUserData}
                      />
                    </div>
                    {/* End: Error Example */}
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        name="number"
                        rows={1}
                        placeholder="Enter your Whatsapp number"
                        value={userData.number}
                        onChange={postUserData}
                      />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary shadow d-block w-100"
                        type="submit" onClick={submitData}>
                        {/* type="submit" onClick={() => handleClick(sendEmail, submitData)}> */}
                        Send{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End: Contact Details */}
      </section>
      {/* End: Contact Details */}
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
              <img className="nav_logo" src={logo} alt="" />
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

export default Pay_basic
