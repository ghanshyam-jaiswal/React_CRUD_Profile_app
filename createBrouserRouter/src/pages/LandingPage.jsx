import React from "react";
import { Link } from "react-router-dom";
import landingImage2 from "../assets/bannerBackrground4.webp";

const LandingPage = () => {
  return (
    <section className="landing">
      <article className="LandingInfo">
        <div className="logo"></div>
        <h1>React.js</h1>
        <h1> CRUD Application</h1>
        <p>
          This is a simple project created by using the React library.
          <br /> A simple application to demonstrate the use of react.js for
          creating a CRUD(Create, Read, Update and Delete)..
        </p>

        <Link to={"/home"} className="getStarted">
          Get Started
        </Link>
      </article>
      <section className="landingDesign">
        <div className="image1"></div>
        <div className="image2"></div>
        <div className="image3"></div>
        <div className="image4"></div>
      </section>
    </section>
  );
};

export default LandingPage;
