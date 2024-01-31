import React, {useEffect} from "react";
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
          <div className="flex justify-content-center align-items-center">
            <h1 className="">4 </h1>
            <img src={404} alt="404-Not found" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Notfound;
