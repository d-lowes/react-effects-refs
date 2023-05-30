import React from "react";

function Card({ code, image, value, suit }) {
  return (
    <div className="Card">
      <img src={image}></img>
    </div>
  );
}

export default Card;