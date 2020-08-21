import React from "react";
import "./AccountNav.css";
import usericon from "../../../assets/images/profile-pic-male.svg";

const AccountNav = (props) => {
  return (
    <div className="acc_nav">
      <div className="acc_imgcon">
        <img
          style={{ margin: "0 auto" }}
          height="50px"
          width="50px"
          alt="user"
          src={usericon}
        />
      </div>
      <div className="accdiv">
        <a
          className="account"
          href={
            "http://192.168.225.29:3000/profile/#access_token=" +
            localStorage.getItem("spotify_access_token")
          }
        >
          <div className="acc_pinfo">Account Overview</div>
        </a>
      </div>
    </div>
  );
};

export default AccountNav;
