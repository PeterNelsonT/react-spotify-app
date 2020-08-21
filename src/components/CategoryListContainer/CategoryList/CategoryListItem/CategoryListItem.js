import React from "react";
import "./CategoryListItem.css";
import PlayIcon from "../../../PlayIcon/PlayIcon";
import { NavLink } from "react-router-dom";
function CategoryListItem(props) {
  return (
    <div className="clt_main">
      <div className="clt_cvrimg">
        <img
          draggable="false"
          loading="lazy"
          src={props.item.images[0].url}
          alt=""
          className="clt_img"
        />
      </div>

      <NavLink to={"/detail/" + props.albmid} exact className="clt_name">
        {props.item.name}
      </NavLink>
      <div className="clt_descr" as="div">
        <span>{props.item.description}</span>
      </div>
      <div className="clt_playdiv">
        <PlayIcon />
      </div>
    </div>
  );
}

export default CategoryListItem;
