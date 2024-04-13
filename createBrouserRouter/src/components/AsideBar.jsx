import React from "react";
import { NavLink } from "react-router-dom";

const AsideBar = () => {
  return (
    <section className="AsideBar">
      <div className="Links">
        <NavLink
          to={"/allusers/user"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          All Users
        </NavLink>
        <NavLink
          to={"/allusers/createusers"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
        
          Create Users
        </NavLink>
      </div>
    </section>
  );
};

export default AsideBar;
