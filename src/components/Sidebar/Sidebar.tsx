import { link } from "fs";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  {
    icon: "",
    name: "Counter",
    linkTo: "/Users",
  },
  {
    icon: "",
    name: "Claims",
    linkTo: "/Users",
  },
  {
    icon: "",
    name: "Roles",
    linkTo: "/Users",
  },
  {
    icon: "",
    name: "Users",
    linkTo: "/Users",
  },
  {
    icon: "",
    name: "Access Control",
    linkTo: "/AccessControl",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="layout_sidebar">
      <div className="layout_sidebar-header">Flexible Auth</div>
      <ul className="layout_sidebar-list">
        {sidebarItems.map(({ name, linkTo }) => {
          return (
            <li
              key={name}
              className="layout_sidebar-list-item"
              onClick={() => navigate(linkTo)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
