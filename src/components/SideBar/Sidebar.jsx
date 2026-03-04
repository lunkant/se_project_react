import "./Sidebar.css";
import avatarDefault from "../../assets/avatar.svg";

export default function SideBar() {
  const username = "Terrence Tegegne";
  const avatar = avatarDefault;
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img src={avatar} alt="user avatar" className="sidebar__avatar" />

        <p className="sidebar__username">{username}</p>
      </div>
    </aside>
  );
}
