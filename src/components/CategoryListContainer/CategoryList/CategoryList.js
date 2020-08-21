import React, { useEffect, useState } from "react";
import "./CategoryList.css";
import CategoryListItem from "./CategoryListItem/CategoryListItem";
import SpotifyWebApi from "spotify-web-api-js";
import { NavLink } from "react-router-dom";

const spotifyApi = new SpotifyWebApi();

const CategoryList = (props) => {
  const [categorystate, setcategorystate] = useState({
    fplaylists: [],
  });

  const getData = async () => {
    spotifyApi.setAccessToken(props.access_token);
    let response3;
    var ar = [];
    try {
      response3 = await spotifyApi.getCategoryPlaylists(props.categories.id, {
        limit: 6,
      });
      ar = response3.playlists.items;
      //console.log(ar);
      setcategorystate((prevState, props) => {
        return { fplaylists: ar };
      });
    } catch (e) {
      //console.log(spotifyApi);
      response3 = await spotifyApi.getFeaturedPlaylists({ limit: 6 });
      ar = response3.playlists.items;
      //console.log(ar);
      setcategorystate((prevState, props) => {
        return { fplaylists: ar };
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return categorystate.fplaylists.length > 0 ? (
    <div className="cl_main">
      <div className="cl_sub">
        <div className="cl_head">
          <h2 className="cl_name">
            <NavLink to={"/category/" + props.catid} exact className="clt_name">
              {props.categories.name}
            </NavLink>
          </h2>
        </div>
        {categorystate.fplaylists.map((item, index) => (
          <CategoryListItem albmid={item.id} item={item} key={item.id} />
        ))}
      </div>
    </div>
  ) : null;
};

export default CategoryList;
