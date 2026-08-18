import { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatarDefault from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  handleRegisterClick,
  handleLoginClick,
  weatherData,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Site Logo" />
      </NavLink>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />

      {currentUser && (
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      )}

      {!currentUser && (
        <>
          <button
            onClick={handleLoginClick}
            type="button"
            className="header__add-clothes-btn"
          >
            Log in
          </button>
          <button
            onClick={handleRegisterClick}
            type="button"
            className="header__add-clothes-btn"
          >
            Sign up
          </button>
        </>
      )}

      {currentUser && (
        <NavLink className="header__nav-link" to="/profile">
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar || avatarDefault}
                alt="user avatar"
                className="header__avatar"
                onError={(evt) => {
                  evt.target.onerror = null;
                  evt.target.src = avatarDefault;
                }}
              />
            ) : (
              <div className="header__avatar header__avatar_placeholder">
                {currentUser.name?.[0]}
              </div>
            )}
          </div>
        </NavLink>
      )}
    </header>
  );
}
export default Header;
