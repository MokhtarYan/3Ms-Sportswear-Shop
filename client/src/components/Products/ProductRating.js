import React from "react";

const ProductRating = ({ rating }) => {
  function stars(x) {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        star.push(<span style={{ color: "gold", fontSize: "20px" }}>★</span>);
      } else {
        star.push(<span style={{ color: "black", fontSize: "20px" }}>★</span>);
      }
    }
    return star;
  }
  return <div>{stars(rating)}</div>;
};

export default ProductRating;
