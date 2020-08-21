import React, { useEffect, useState, Fragment } from "react";
import "./CategoryListContainer.css";
import CategoryList from "./CategoryList/CategoryList";
import SpotifyWebApi from "spotify-web-api-js";
import Loader from "../Loader/Loader";

const spotifyApi = new SpotifyWebApi();

const CategoryListContainer = (props) => {
  const [categorystate, setcategorystate] = useState({
    fplaylists: [],
  });
  const getData = async () => {
    spotifyApi.setAccessToken(localStorage.getItem("spotify_access_token"));
    var ar = [];
    const response2 = await spotifyApi.getCategories();
    ar = response2.categories.items;
    setcategorystate((prevState, props) => {
      return { fplaylists: ar };
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return categorystate.fplaylists.length === 0 ? (
    <Loader />
  ) : (
    <Fragment>
      <div style={{ height: "80px" }}></div>
      {categorystate.fplaylists.map((item, index) => (
        <CategoryList
          access_token={localStorage.getItem("spotify_access_token")}
          categories={item}
          key={item.id}
          catid={item.id}
        />
      ))}
    </Fragment>
  );
};

export default CategoryListContainer;
