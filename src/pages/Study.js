import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import Card from "../components/Card";
import "./Study.css";

function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  // const cards = deck.cards;

  useEffect(() => {
    async function loadDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
    }
    loadDeck();
  }, [deckId]);

  return (
    <React.Fragment>
      <div className="study">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">Deck</li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h1>Study: {deck && deck.name}</h1>
      </div>

      <div className="studyCard">
        {deck && deck.cards.length < 3 ? (
          <div className="cardError">
            <h2>Not enough cards.</h2>
            <p>
              You need at least 3 cards to study. There are {deck.cards.length}{" "}
              in this deck.
            </p>

            <button type="button" className="btn btn-success create">
              Add Cards +
            </button>
          </div>
        ) : (
          <Card deck={deck} />
        )}
        {/* <Card cards={cards} /> */}
      </div>
    </React.Fragment>
  );
}

export default Study;
