import React from "react";
import { Link } from "react-router-dom";
import "./ListDecks.css";

function ListDecks(props) {
  const { decks, handleDelete } = props;

  const constructList = () => {
    return decks.map((deck) => (
      <div key={deck.id} className="card">
        <div className="card-title">
          <h3>{deck.name}</h3>
          <p>{deck.cards.length} cards</p>
        </div>
        <p>{deck.description}</p>
        <div className="card-body action-buttons">
          <div>
            <Link to={`/decks/${deck.id}`}>
              <button type="button" className="btn btn-secondary">
                View
              </button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <button id="study" type="button" className="btn btn-primary">
                Study
              </button>
            </Link>
          </div>
          <div>
            <button
              id={deck.id}
              type="button"
              className="btn btn-danger"
              onClick={(e) => handleDelete(e)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return <React.Fragment>{constructList()}</React.Fragment>;
}

export default ListDecks;
