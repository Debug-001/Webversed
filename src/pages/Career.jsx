import React, {useEffect} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { IoOpenOutline } from "react-icons/io5";


const Career = () => {

  useEffect(() => {
    document.title = `Careers`;
  },[]);

  return (
    <>
      <Navbar />
      <section>
        <div className="container mt-5 pb-5 p-3">
          <h1 className="font-weight-bolder text-decoration-underline" style={{fontSize:"2.6rem"}}>
            Career Applications
          </h1>
          <div className="available-jobs">
            <div className="career-sub-heading">
            <h2 className="font-weight-bold">Current Openings</h2>
            <IoOpenOutline className="" size={26}/>
            </div>
            <div class="container">
              <div class="row career-cards mt-3 d-flex justify-content-start">
               
                <div class="col">
                <div class="card" style={{width:"25rem"}}>
                    <div class="card-body1">
                      <h5 class="card-title">Coming Soon!</h5>
                      <p class="card-text">
                        Stay up-to-date with our job openings via our Linkedin and Twitter Announcements
                      </p>
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
