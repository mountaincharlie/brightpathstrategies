import React from "react";
import "./Home.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <HeaderNav/>
      <h1 className="heading">Home content</h1>
      {/* page content - site name, linkedin button, project example */}
      <Footer/>
    </>
  )
};

export default Home;
