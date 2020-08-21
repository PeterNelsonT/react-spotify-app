import React from "react";
import LoginImg from "../../assets/images/Login.png";
import Aux from "../../container/HOC/Auxilary";
const LoginPage = (props) => {
  return (
    <Aux>
      <div style={{ height: "60px" }}></div>
      <img
        alt="login"
        src={LoginImg}
        style={{ width: "100%", height: "100%" }}
      />
    </Aux>
  );
};

export default LoginPage;
