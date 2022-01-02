import React from "react";
import { Outlet } from "react-router-dom";
import TopNavigationBar from "./NavBar/TopNavigationBar";

const DefaultApp = () => {
  return (
    <div className="">
      <TopNavigationBar />
      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultApp;
