import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import NavBar from "../NavBar";
import "./Layout.css";

export const Layout = () => {
  const navigate = useNavigate();

  function navigateToCounter() {
    navigate("/counter");
  }

  function navigateToFetchData() {
    navigate("/fetchData");
  }

  return (
    <div id="layout-div">
      <header>
        <NavBar />
        <Button onClick={navigateToCounter}>navigateToCounter</Button>
        <Button onClick={navigateToFetchData}>navigateToFetchData</Button>
      </header>
      <Outlet />
      <footer id="layout-footer">Footer</footer>
    </div>
  );
};
