import React from "react";
import { Link } from "react-router-dom";

function Deck(props) {
  const { deck } = props;

  return (
    <div className="card-container">
      <div className="card no-border">
        <div className="card-body">
          <h2>{deck.name}</h2>
          {deck && deck.description}
        </div>
        <div className="deck-buttons">
          <div className="l-buttons">
            <Link to={`/decks/${deck.id}/edit`}>
              <button type="button" className="btn btn-secondary">
                Edit
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <button id="study" type="button" className="btn btn-primary">
                Study
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/cards/new`}>
              <button id="add-cards" type="button" className="btn btn-primary">
                + Add Cards
              </button>
            </Link>
          </div>
          <div className="r-buttons">
            <Link to={`/decks/${deck.id}/study`}>
              <button id="study" type="button" className="btn btn-danger">
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deck;
