import React from "react";

/** Render the card.
 *
 * Props
 * - code: unique card id "6H"
 * - image: image link for a card .png
 * - value: card value "6" or "KING"
 * - suit: suit "hearts"
 *
 * DrawCard -> Card
 */

function Card({ code, image, value, suit }) {
  return (
    <div className="Card">
      <img src={image} alt={`${value}, ${suit}`}></img>
    </div>
  );
}

export default Card;