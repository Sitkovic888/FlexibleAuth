import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import NavBar from "./NavBar";

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
      <div className="w-full h-screen grid grid-rows-[max-content,1fr,max-content]">
        <header>
          <NavBar />
          <Button onClick={navigateToCounter}>navigateToCounter</Button>
          <Button onClick={navigateToFetchData}>navigateToFetchData</Button>
        </header>
        <Outlet />
        <footer className="flex justify-center bg-red-800 text-white">
          Footer
        </footer>
      </div>
    </>
  );
};
