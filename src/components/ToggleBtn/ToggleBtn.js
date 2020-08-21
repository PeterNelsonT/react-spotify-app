import React from "react";
import "./ToggleBtn.css";

const ToggleBtn = (props) => {
  return (
    <div
      className="react-toggle displayOnlyInLargeViewport_1gtM"
      id="xxx"
      name="xxx"
    >
      {" "}
      <div className="react-toggle-track">
        {" "}
        <div className="react-toggle-track-check">
          {" "}
          <span className="toggle_16vC moon_1N64">🌞</span>{" "}
        </div>
        <div className="react-toggle-track-x">
          {" "}
          <span className="toggle_16vC sun_3CZP">🌜</span>{" "}
        </div>
      </div>
      <div className="react-toggle-thumb"> </div>
      <input
        type="checkbox"
        aria-label="Dark mode toggle"
        className="react-toggle-screenreader-only"
      />{" "}
    </div>
  );
};

export default ToggleBtn;
