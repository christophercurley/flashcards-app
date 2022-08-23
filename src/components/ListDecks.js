import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function ListDecks(props) {
  const { decks, handleDelete } = props;
  const { url, path } = useRouteMatch();
  console.log("url", url, "path", path);

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
            <button type="button" className="btn btn-secondary">
              View
            </button>
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

  console.log(constructList());
  return <React.Fragment>{constructList()}</React.Fragment>;
}

export default ListDecks;
