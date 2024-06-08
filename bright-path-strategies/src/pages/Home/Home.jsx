import React from "react";
import "./Home.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'

const Home = () => {
  return (
    <>
      <HeaderNav/>
      <h1 className="heading">Home content</h1>

      {/* HeaderNav component - contains logo and nav */}
      {/* page content - site name, linkedin button, project example */}
      {/* FooterNav component - contains copyright and links */}
    </>
  )
};

export default Home;
