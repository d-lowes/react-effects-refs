import { React, useState } from "react";
import axios from "axios";
import Card from "./Card";
import {BASE_URL} from "./DeckOfCards";

/** Draw a card.
 *
 * Props
 * - deck: deck_id and cards remaining
 *
 * DeckOfCards -> DrawCard -> { Card }
 */

function DrawCard({ deck }) {
  const deckId = deck.deck_id;
  const [currCard, setCurrCard] = useState(null);

  /** draw a single card from the deck and set the new card */
  async function drawACard() {
    const response = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);
    const newCard = response.data.cards[0];
    setCurrCard(newCard);
  }

  return (
    <div>
      {deck.remaining > 0 && <button onClick={drawACard}>Draw A Card</button>}
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