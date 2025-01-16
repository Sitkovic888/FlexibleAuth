import "./Sidebar.css";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    icon: "",
    name: "Counter",
    linkTo: "/Counter",
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
  return (
    <aside className="layout_sidebar">
      <div className="layout_sidebar-header">Flexible Auth</div>
      <ul className="layout_sidebar-list">
        {sidebarItems.map(({ name, linkTo }) => {
          return (
            <li key={name} className="layout_sidebar-list-item">
              <Link to={linkTo}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
