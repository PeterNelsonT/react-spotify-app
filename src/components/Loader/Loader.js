import React from "react";
import LoaderImg from "../../assets/images/loader.gif";

const Loader = (props) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        margin: "auto",
        paddingTop: "200px",
      }}
    >
      <img
        alt="loading"
        src={LoaderImg}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Loader;
