import { React, useState, useEffect } from "react";
import DrawCard from "./DrawCard";
import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

function DeckOfCards() {
  const [deck, setDeck] = useState("");

  useEffect(function fetchAndSetDeck() {
    async function fetchDeck() {
      const response = await axios.get(`${BASE_URL}/new/`);
      const newDeck = response.data;
      setDeck(newDeck);
    }
    fetchDeck();
  }, []);


  return (
    <div>
      <DrawCard deck={deck} />
    </div>
  );
}

export { BASE_URL };
export default DeckOfCards;