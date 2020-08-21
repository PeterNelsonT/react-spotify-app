import React, { useEffect, useState, Fragment } from "react";
import "../CategoryList/CategoryList.css";
import CategoryListItem from "../CategoryList/CategoryListItem/CategoryListItem";
import SpotifyWebApi from "spotify-web-api-js";
import Loader from "../../Loader/Loader";

const spotifyApi = new SpotifyWebApi();

const CategoryAll = (props) => {
  const [categorystate, setcategorystate] = useState({
    fplaylists: [],
    name: "",
  });

  const getData = async () => {
    spotifyApi.setAccessToken(localStorage.getItem("spotify_access_token"));
    let response = await spotifyApi.getCategory(props.match.params.id);
    let response3;
    var ar = [];
    try {
      response3 = await spotifyApi.getCategoryPlaylists(props.match.params.id);
      ar = response3.playlists.items;
      //console.log(ar);
      setcategorystate((prevState, props) => {
        return { fplaylists: ar, name: response.name };
      });
    } catch (e) {
      //console.log(spotifyApi);
      response3 = await spotifyApi.getFeaturedPlaylists();
      ar = response3.playlists.items;
      //console.log(ar);
      setcategorystate((prevState, props) => {
        return { fplaylists: ar, name: response.name };
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return categorystate.fplaylists.length > 0 ? (
    <Fragment>
      <div style={{ height: "80px" }}></div>
      <div className="cl_main">
        <div className="cl_sub">
          <div className="cl_head">
            <h2 className="cl_name">{categorystate.name}</h2>
          </div>
          {categorystate.fplaylists.map((item, index) => (
            <CategoryListItem albmid={item.id} item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Fragment>
  ) : (
    <Loader />
  );
};

export default CategoryAll;
