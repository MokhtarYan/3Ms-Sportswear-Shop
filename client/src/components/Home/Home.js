import React from "react";
import "./Home.css";
const Home = ({ lan }) => {
  return (
    <div className="home" style={{ display: "flex", alignItems: "center" }}>
      <img
        className="homePic"
        src="https://res.cloudinary.com/dqzabjiql/image/upload/v1680993983/Welcome_Banner_2_ugy8sm.jpg"
        alt=""
      />
      <div className="welcome">
        <h4 className="title">
          {" "}
          {lan === "FR"
            ? "ICI DANS LA BOUTIQUE DE VÊTEMENTS DE SPORT EN LIGNE 3Ms"
            : "HERE IN 3Ms ONLINE SPORTSWEAR SHOP"}{" "}
        </h4>
        <p className="phrase">
          {lan === "FR"
            ? "Nous vous offrons la possibilité d’obtenir des vêtements de sport à bas prix en haute qualité par des marques célèbres!"
            : "We offer you the opportunity to get low-priced sportswear in high quality by famous Brands!"}
        </p>
      </div>
    </div>
  );
};

export default Home;
