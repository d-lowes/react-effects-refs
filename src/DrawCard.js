import { React, useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import {BASE_URL} from "./DeckOfCards";

function DrawCard({ deck }) {
  const deckId = deck.deck_id;
  const [currCard, setCurrCard] = useState(null);

  async function drawACard() {
    const response = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);
    const newCard = response.data.cards[0];
    setCurrCard(newCard);
  }

  return (
    <div>
      <button onClick={drawACard}>Draw A Card</button>
      {currCard &&
        <Card
          code={currCard.code}
          image={currCard.image}
          value={currCard.value}
          suit={currCard.suit}
        />}
    </div>
  );

}

export default DrawCard;