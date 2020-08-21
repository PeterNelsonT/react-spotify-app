import React, { useEffect, useState } from "react";
import "./AlbumDetail.css";
import AlbumHeader from "./AlbumHeader/AlbumHeader";
import AlbumFooter from "./AlbumFooter/AlbumFooter";
import SpotifyWebApi from "spotify-web-api-js";
import Loader from "../Loader/Loader";

const spotifyApi = new SpotifyWebApi();
const AlbumDetail = (props) => {
  const [categorystate, setcategorystate] = useState({
    trackhead: {},
    trackimg: "",
    tracklist: [],
    tracktotaldur: 0,
  });

  const getData = async () => {
    spotifyApi.setAccessToken(localStorage.getItem("spotify_access_token"));
    const response = await spotifyApi.getPlaylist(props.match.params.id);
    const response1 = await spotifyApi.getPlaylistCoverImage(
      props.match.params.id
    );
    const response2 = await spotifyApi.getPlaylistTracks(props.match.params.id);
    var ms = response.tracks.items.reduce(function (a, b) {
      return a + (b.track === null ? 0 : b.track.duration_ms);
    }, 0);
    var dur =
      (Math.floor((ms / (1000 * 60 * 60)) % 24) > 9
        ? Math.floor((ms / (1000 * 60 * 60)) % 24)
        : "0" + Math.floor((ms / (1000 * 60 * 60)) % 24)) +
      " hr " +
      (Math.floor((ms / (1000 * 60)) % 60) > 9
        ? Math.floor((ms / (1000 * 60)) % 60)
        : "0" + Math.floor((ms / (1000 * 60)) % 60)) +
      " min ";

    setcategorystate((prevState, props) => {
      return {
        trackhead: response,
        trackimg: response1[0],
        tracklist: response2.items,
        tracktotaldur: dur,
      };
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return categorystate.trackimg === "" ? (
    <Loader />
  ) : (
    <div style={{ width: "100%", margin: "0", padding: "0" }}>
      <div style={{ height: "60px", width: "100%" }}></div>
      <AlbumHeader
        trackhead={categorystate.trackhead}
        trackimg={categorystate.trackimg}
        trackdur={categorystate.tracktotaldur}
      />

      <AlbumFooter tracklist={categorystate.tracklist} />
    </div>
  );
};

export default AlbumDetail;
