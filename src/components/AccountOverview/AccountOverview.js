import React, { useEffect, useState } from "react";
import "./AccountOverview.css";
import AccountNav from "./AccountNav/AccountNav";
import AccountDetails from "./AccountDetails/AccountDetails";
import SpotifyWebApi from "spotify-web-api-js";
import Loader from "../Loader/Loader";
import Aux from "../../container/HOC/Auxilary";

const spotifyApi = new SpotifyWebApi();

const AccountOverview = (props) => {
  const [categorystate, setcategorystate] = useState({
    userdetail: {},
  });

  const getData = async () => {
    spotifyApi.setAccessToken(localStorage.getItem("spotify_access_token"));
    const response3 = await spotifyApi.getMe();
    setcategorystate((prevState, props) => {
      return {
        userdetail: response3,
      };
    });
    console.log(response3);
  };

  useEffect(() => {
    getData();
  }, []);

  return categorystate.userdetail.id === undefined ? (
    <Loader />
  ) : (
    <Aux>
      <div style={{ height: "60px" }}></div>
      <div className="accow_con">
        <AccountNav username={categorystate.userdetail.display_name} />
        <AccountDetails userdetail={categorystate.userdetail} />
      </div>
    </Aux>
  );
};

export default AccountOverview;
