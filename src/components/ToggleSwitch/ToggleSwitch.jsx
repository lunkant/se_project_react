import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <label htmlFor="temperature-toggle" className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        checked={currentTemperatureUnit === "C"}
        type="checkbox"
        className="toggle-switch__checkbox"
        id="temperature-toggle"
      />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text toggle-switch__text_F">F</span>
      <span className="toggle-switch__text toggle-switch__text_C">C</span>
    </label>
  );
}
