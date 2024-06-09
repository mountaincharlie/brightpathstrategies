import React from "react";
import "./About.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <>
      <HeaderNav/>
      <h1 className="heading">About content</h1>
      {/* page content - site name, linkedin button, project example */}
      <Footer/>
    </>
  )
};

export default About;
