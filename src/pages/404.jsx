import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import notfound from '/img/404.png'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Notfound = () => {

    useEffect(() => {
        document.title = `404 | Not Found`;
      },[]);

  return (
    <>
      <Navbar />
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <h1 className="display-404">4</h1>
            <img className="img-404 img-fluid" src={notfound} alt="404-Not found" />
            <h1 className="display-404">4</h1>
          </div>
          <div className="d-flex flex-column pt-2 justify-content-center align-items-center">
          <p className="font-weight-bolder h3">404 ERROR - PAGE NOT FOUND!</p>
          <p className="font-weight-bolderh h4">Looks like your have been lost😵‍💫😵</p>
          <Link to='/'>
          <button className="btn fs-6 mt-3">Go Back Home</button>
          </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Notfound;
