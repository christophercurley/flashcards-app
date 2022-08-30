import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function ListCards(props) {
  const { url } = useRouteMatch();
  const { cards, handleCardDelete } = props;

  const renderCardList = cards.map((card) => (
    <div className="card" key={card.id}>
      <div className="card-body flashcard">
        <div className="card-front">{card.front}</div>
        <div className="card-back">
          <div className="answer">{card.back}</div>
          <div className="card-buttons">
            <Link to={`${url}/cards/${card.id}/edit`}>
              <button type="button" id={card.id} className="btn btn-secondary">
                Edit
              </button>
            </Link>
            <button
              type="button"
              id={card.id}
              className="btn btn-danger"
              onClick={(e) => handleCardDelete(e)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return <React.Fragment>{renderCardList}</React.Fragment>;
}

export default ListCards;
