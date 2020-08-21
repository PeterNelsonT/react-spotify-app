import React, { Fragment } from "react";
import "./PlayIcon.css";

const PlayIcon = (props) => {
  return (
    <Fragment>
      <button
        className="clt_playbtn"
        title="Play"
        aria-label="Play"
        data-testid="play-button"
        style={{ size: "40px" }}
      >
        <svg height="16" role="img" width="16" viewBox="0 0 24 24">
          <polygon
            points="21.57 12 5.98 3 5.98 21 21.57 12"
            fill="currentColor"
          ></polygon>
        </svg>
      </button>
    </Fragment>
  );
};

export default PlayIcon;
