import React, { Fragment } from "react";
import "./AlbumHeader.css";

function AlbumHeader(props) {
  return (
    <Fragment>
      <div className="alb_con">
        <div className="test">
          <img
            loading="lazy"
            src={props.trackimg.url}
            alt="Alone Again"
            className="testimg"
            sizes="(min-width: 1280px) 232px, 192px"
          />
        </div>
        <div>
          <h1 className="alb_name">{props.trackhead.name}</h1>
          <h2 className="alb_desc">
            <p className="">
              <span>{props.trackhead.description}</span>
            </p>
          </h2>
          <span className="alb_other">{props.trackdur} </span>
        </div>
      </div>
    </Fragment>
  );
}

export default AlbumHeader;
