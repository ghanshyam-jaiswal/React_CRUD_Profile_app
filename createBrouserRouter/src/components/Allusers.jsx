import React from "react";
import AsideBar from "./AsideBar";
import { Outlet } from "react-router-dom";
import HomeNav from "./HomeNav";

const Allusers = () => {
  return (
    <section className="allusers">
      <HomeNav />
      <AsideBar />
      <Outlet />
    </section>
  );
};

export default Allusers;
