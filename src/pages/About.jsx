import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {

  useEffect(() => {
    document.title = `About Us`;
  },[]);
  
  return (
    <>
    <Navbar/>
    <section></section>
    <Footer/>
    </>
  )
}

export default About