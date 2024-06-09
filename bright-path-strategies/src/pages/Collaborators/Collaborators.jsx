import React from "react";
import "./Collaborators.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const Collaborators = () => {
  return (
    <div className="collaboratorspage-container">
      <HeaderNav/>
      <h1 className="heading">Collaborators content</h1>
      {/* page content - site name, linkedin button, project example */}
      <Footer/>
    </div>
  )
};

export default Collaborators;
