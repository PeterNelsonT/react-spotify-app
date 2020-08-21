import React, { Component } from "react";
import Auth from "./Auth/Auth";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    /*
    this.state = {
      access_token: params.access_token,
      refresh_token: params.refresh_token,
      userstat: params.access_token ? true : false,
    };*/
    if (params.access_token !== undefined) {
      localStorage.setItem("spotify_access_token", params.access_token);
      //alert("reauth");
    }
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  render() {
    return (
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
    );
  }
}

export default App;
