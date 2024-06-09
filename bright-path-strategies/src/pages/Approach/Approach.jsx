import React from "react";
import "./Approach.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const Approach = () => {
  return (
    <>
      <HeaderNav/>
      <h1 className="heading">Approach content</h1>
      {/* page content - site name, linkedin button, project example */}
      <Footer/>
    </>
  )
};

export default Approach;
