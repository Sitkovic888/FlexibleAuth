import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

export const Layout = () => {
  const navigate = useNavigate();

  function navigateToCounter() {
    navigate("/counter");
  }

  function navigateToFetchData() {
    navigate("/fetchData");
  }

  return (
    <>
      <header>
        <Button onClick={navigateToCounter}>navigateToCounter</Button>
        <Button onClick={navigateToFetchData}>navigateToFetchData</Button>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
