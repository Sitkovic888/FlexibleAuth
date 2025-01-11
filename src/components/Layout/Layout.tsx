import { useNavigate, Outlet } from "react-router-dom";
import "./Layout.css";
import { NavBar, Button } from "@/components";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer position="bottom-right" />
    </div>
  );
};
