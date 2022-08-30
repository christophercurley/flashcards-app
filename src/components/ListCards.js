import React from "react";

function ListCards(props) {
  const { cards, handleCardDelete } = props;
  const renderCardList = cards.map((card) => (
    <div className="card" key={card.id}>
      <div className="card-body flashcard">
        <div className="card-front">{card.front}</div>
        <div className="card-back">
          <div className="answer">{card.back}</div>
          <div className="card-buttons">
            <button type="button" id={card.id} className="btn btn-secondary">
              Edit
            </button>
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
