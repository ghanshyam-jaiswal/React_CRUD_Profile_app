import React from "react";
import { NavLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <article className="nav">
      <div className="logo"></div>
      <div className="links">
        <NavLink
          to={"/home"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
        </NavLink>
        <NavLink
          to={"/home/registration"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Register
        </NavLink>
        <NavLink
          to={"/home/aboutpage"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/home/contact"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
    </article>
  );
};

export default NavComponent;
