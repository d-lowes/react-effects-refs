import { React, useState, useEffect } from "react";
import DrawCard from "./Card";
import axios from "axios";

const GET_DECK_URL = "https://deckofcardsapi.com/api/deck/new/";

function DeckOfCards() {
  const [deck, setDeck] = useState("");

  useEffect(function fetchAndSetDeck() {
    async function fetchDeck() {
      const response = await axios.get(GET_DECK_URL);
      const newDeck = response.data;
      setDeck(newDeck);
    }
    fetchDeck();
  }, [ ]);


  return (
    <div>
      <DrawCard deck={deck} />
    </div>
  );
}

export default DeckOfCards;