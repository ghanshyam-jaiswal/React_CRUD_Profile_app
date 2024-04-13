import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="AboutPage">
      <div>
        <h1>About React Project</h1>
        <p>This is a simple project created using the React library.</p>
        <p>
          The Crude Operation Project on GitHub Data utilizing the React library
          is a dynamic and interactive application designed to showcase basic
          CRUD (Create, Read, Update, Delete) operations on GitHub data.
          Developed using React, a popular JavaScript library for building user
          interfaces, this project offers a practical demonstration of how React
          can be employed to manage and manipulate data seamlessly.
        </p>
        <p>Key features of this project include:</p>
        <ol>
          <li>User-friendly Interface</li>
          <li>CRUD Functionality</li>
          <li>Real-time Data Interaction</li>
          <li>GitHub API Integration:</li>
        </ol>
        <Link to={"/home/contact"}>Learn more about React</Link>
      </div>
      <div></div>
    </section>
  );
};

export default About;
