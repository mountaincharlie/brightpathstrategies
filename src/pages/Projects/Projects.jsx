import React from "react";
import "./Projects.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const Projects = () => {
  return (
    <div className="projectspage-container">
      <HeaderNav/>
      <h1 className="heading">Projects content</h1>
      {/* page content - site name, linkedin button, project example */}
      <Footer/>
    </div>
  )
};

export default Projects;
