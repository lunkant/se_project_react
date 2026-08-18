import { useContext } from "react";
import "./Sidebar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import avatarDefault from "../../assets/avatar.svg";
export default function SideBar({ handleSignOut, handleEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        {currentUser?.avatar ? (
          <img
            src={currentUser?.avatar || avatarDefault}
            alt="user avatar"
            className="sidebar__avatar"
            onError={(evt) => {
              evt.target.onerror = null;
              evt.target.src = avatarDefault;
            }}
          />
        ) : (
          <div className="sidebar__avatar header__avatar_placeholder">
            {currentUser?.name?.[0]}
          </div>
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__actions">
        <button
          type="button"
          className="sidebar__signout-btn"
          onClick={handleEditProfileClick}
        >
          Change profile data
        </button>
        <button
          type="button"
          className="sidebar__signout-btn"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
