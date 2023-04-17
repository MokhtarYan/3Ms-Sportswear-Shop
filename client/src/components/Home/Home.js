import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home" style={{ display: "flex", alignItems: "center" }}>
      <img
        className="homePic"
        src="https://res.cloudinary.com/dqzabjiql/image/upload/v1680993983/Welcome_Banner_2_ugy8sm.jpg"
        alt=""
      />
      <div className="welcome">
        <h4 className="title"> HERE IN 3Ms ONLINE SPORTSWEAR SHOP </h4>
        <p className="phrase">
          We offer you the opportunity to get low-priced sportswear in high
          quality by famous Brands!
        </p>
      </div>
    </div>
  );
};

export default Home;
