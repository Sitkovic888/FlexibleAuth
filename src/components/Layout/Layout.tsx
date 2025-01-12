import { useNavigate, Outlet } from "react-router-dom";
import "./Layout.css";
import { NavBar, Button, Sidebar } from "@/components";
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
    <div className="layout">
      <Sidebar />
      <div className="layout_main">
        <header>
          <NavBar />
          <Button onClick={navigateToCounter}>navigateToCounter</Button>
          <Button onClick={navigateToFetchData}>navigateToFetchData</Button>
        </header>
        <Outlet />
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};
