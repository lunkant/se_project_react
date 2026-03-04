import "./Header.css";
import logo from "../../assets/logo.svg";
import avatarDefault from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Terrence Tegegne";
  const avatar = avatarDefault;
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Site Logo" />
      </NavLink>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />

      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">{username}</p>
          <img src={avatar} alt="user avatar" className="header__avatar" />
        </div>
      </NavLink>
    </header>
  );
}
export default Header;
