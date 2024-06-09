import React from "react";
import "./About.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'
import about from '../../assets/images/about-pic.png';


const About = () => {
  return (
    <div className="aboutpage-container">
      <HeaderNav/>
      <div className="aboutpage-content">
        <div className="aboutpage-content-heading">
          <div className="aboutpage-content-heading-word">About</div>
          <div className="aboutpage-content-heading-word">BrightPath</div>
          <div className="aboutpage-content-heading-word">Strategies</div>
        </div>
        
        <div className="aboutpage-content-desc">
          <div className="aboutpage-content-desc-image-container">
            <img src={about} alt="About"/>
          </div>
          <div className="aboutpage-content-desc-text">
            Claire LaBrunerie is a project manager, advisor, researcher, synthesizer, and writer supporting private and public entities to shape innovative financing constructs that move debt and equity capital to "the missing middle" in frontier markets -- with a focus on gender and climate resilience and monetization of benefits. Deep sector experience with financial institutions, capital markets, deal structuring, and due diligence. Leveraging 30 years of experience in telecom, consumer products, credit restructuring (non-performing loans, real estate), and fund design and operations -- to support projects with the potential for impact and systems change.
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default About;
