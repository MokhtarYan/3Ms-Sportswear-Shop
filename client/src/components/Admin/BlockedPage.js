import React from "react";

const BlockedPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{ height: "400px", width: "auto" }}
        src="https://static.vecteezy.com/system/resources/previews/012/042/292/original/warning-sign-icon-transparent-background-free-png.png"
        alt=""
      />
      <h1>Sorry! You are blocked.</h1>
    </div>
  );
};

export default BlockedPage;
