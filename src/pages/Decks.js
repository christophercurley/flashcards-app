import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, deleteCard } from "../utils/api";
import Deck from "../components/Deck";
import "./Decks.css";
import ListCards from "../components/ListCards";

function Decks() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const history = useHistory();
  //console.log(deck);

  const handleCardDelete = (event) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteCard(event.target.id);
      history.go(0);
    }
  };

  useEffect(() => {
    async function getDeck() {
      const currentDeck = await readDeck(deckId);
      setDeck(currentDeck);
    }
    getDeck();
  }, []);

  return (
    <React.Fragment>
      <div className="study">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {deck && deck.name}
            </li>
          </ol>
        </nav>
        {deck ? (
          <Deck deck={deck} />
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        )}
        <div className="flashcard-list">
          <div className="flashcard-container">
            {deck ? (
              <React.Fragment>
                <h2 id="cards">Cards</h2>
                <ListCards
                  cards={deck.cards}
                  handleCardDelete={handleCardDelete}
                />
              </React.Fragment>
            ) : (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Decks;
