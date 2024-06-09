import React from "react";
import "./Home.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="homepage-container">
      <HeaderNav/>
      <div className="homepage-content">
        <div className="homepage-content-banner-text">Be An Ally</div>
        <div className="homepage-content-site-name">BrightPath Strategies, LLC</div>
        <div className="homepage-content-site-desc">Mobilizing impact capital at the intersection of gender and climate</div>
      </div>
      <Footer/>
    </div>
  )
};

export default Home;
