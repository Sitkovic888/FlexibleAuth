import { Outlet } from "react-router-dom";
import "./Layout.css";
import { NavBar, Sidebar } from "@/components";
import { ToastContainer } from "react-toastify";

export const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout_main">
        <header>
          <NavBar />
        </header>
        <Outlet />
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};
