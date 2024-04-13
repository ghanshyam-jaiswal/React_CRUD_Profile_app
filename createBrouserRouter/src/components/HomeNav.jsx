import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const HomeNav = () => {
  return (
    <article className="nav">
      <div className="logo"></div>
      <input type="search" name="" id="" className="search"/>
      <div className="links">
        <Link to={"/home"}>Logout</Link>
        <Link to={"/home/registration"}>Register</Link>
        <Link to={"/home/aboutpage"}>About</Link>
        <Link to={"/home/aboutpage"} className="icon-profile">
          <FaUserAlt className="me-3 bg-black" />
          Profile
        </Link>
      </div>
    </article>
  );
};

export default HomeNav;
