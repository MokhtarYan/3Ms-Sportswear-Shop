import React from "react";
import "./Cart.css";
const ConfirmedPurchase = ({ lan }) => {
  return (
    <div className="CP">
      <h1>
        {lan === "FR" ? "L'ACHAT EST CONFIRME" : "THE PURCHASE IS CONFIRMED"}
      </h1>
      <h3>
        {lan === "FR" ? "Merci pour votre CONFIANCE" : "Thanks for your TRUST"}
      </h3>
    </div>
  );
};

export default ConfirmedPurchase;
