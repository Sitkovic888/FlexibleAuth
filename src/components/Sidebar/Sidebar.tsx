import "./Sidebar.css";

const sidebarItems = [
  {
    icon: "",
    name: "Counter",
  },
  {
    icon: "",
    name: "Claims",
  },
  {
    icon: "",
    name: "Roles",
  },
  {
    icon: "",
    name: "Users",
  },
  {
    icon: "",
    name: "Access Control",
  },
];

const Sidebar = () => {
  return (
    <aside className="layout_sidebar">
      <div className="layout_sidebar-header">Flexible Auth</div>
      <ul className="layout_sidebar-list">
        {sidebarItems.map(({ name }) => {
          return (
            <li key={name} className="layout_sidebar-list-item">
              {name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
