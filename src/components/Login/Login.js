import React, { Component, Fragment } from "react";
import UserLogin from "./UserLogin/UserLogin";
import "./Login.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
class Login extends Component {
  state = { userstat: this.props.logedin };
  logHandler = () => {
    localStorage.setItem("spotify_access_token", "");
    this.setState((prevState, props) => {
      return {
        userstat: false,
      };
    });
  };
  render() {
    return (
      <Fragment>
        {this.state.userstat ? (
          <UserLogin clicked={this.logHandler} />
        ) : (
          <div className="Login">
            <a href="http://192.168.225.29:8888/login" className="butn">
              {" "}
              Login to Spotify{" "}
            </a>
          </div>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stat: state.userstat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default Login;
