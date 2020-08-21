import React, { Component, Fragment } from "react";
import classes from "./UserLogin.module.css";
import { NavLink } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();
class UserLogin extends Component {
  state = { clicked: false, username: "" };
  logclickHandler = (e) => {
    this.setState((prevState, props) => {
      return {
        clicked: !prevState.clicked,
      };
    });
  };
  async componentDidMount() {
    spotifyApi.setAccessToken(localStorage.getItem("spotify_access_token"));
    const res = await spotifyApi.getMe();
    this.setState((prevState, props) => {
      return { username: res.display_name };
    });
  }
  render() {
    return (
      <Fragment>
        <div
          className={classes.log_usr}
          onClick={(e) => this.logclickHandler(e)}
        >
          <figure
            className={classes.log_icn}
            title="User"
            style={{ width: "28px", height: "28px" }}
          >
            <div className={classes.log_svg}>
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 18 20"
                xmlns="http://www.w3.org/2000/svg"
                data-testid="user-icon"
              >
                <path d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"></path>
              </svg>
            </div>
          </figure>
          <div className={classes.logusrnm}>{this.state.username}</div>
        </div>
        {this.state.clicked ? (
          <div className={classes.log_drop}>
            <div onClick={(e) => this.logclickHandler(e)}>
              <NavLink to="/profile" exact className={classes.log_items}>
                Account
              </NavLink>
            </div>
            <div onClick={this.props.clicked}>
              <NavLink className={classes.log_items} to="/" exact>
                Log out
              </NavLink>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default UserLogin;
