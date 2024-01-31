import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Design from "../Components/Design";
import {Fade} from 'react-awesome-reveal'
import '../styles/services.css'
import left from '/img/left.png'
import right from '/img/right.png'
import Design2 from "../Components/Design";

const Services = () => {
  useEffect(() => {
    document.title = `Webversed | Services`;
  }, []);

  return (
    <>
      <Navbar />
      <Design2/>
      <section className="">
        <div className="services main container d-flex justify-content-center align-items-center pt-5 mb-5">
          <h1>hiijijiji</h1>
       
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
