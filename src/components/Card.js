import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Card.css";

function Card(props) {
  const { deck } = props;
  let cards = deck ? deck.cards : null;
  const [cardSide, setCardSide] = useState("front");
  const [cardI, setCardI] = useState(0);
  const history = useHistory();

  const handleFlip = () => {
    if (cardSide === "front") setCardSide("back");
    else setCardSide("front");
  };

  const handleNext = () => {
    setCardSide("front");
    if (cardI < cards.length - 1) {
      setCardI(cardI + 1);
    } else if (cardI === cards.length - 1) {
      if (window.confirm("Would you like to reset the cards?")) {
        setCardI(0);
      } else {
        history.push("/");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="card">
        {cards ? (
          <div className="card-body">
            <h5>
              Card {cardI + 1} of {cards.length}
            </h5>
            <p>{cards[cardI].front}</p>
          </div>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        )}
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleFlip}
          >
            Flip
          </button>
          {cardSide === "back" ? (
            <button
              id="study"
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
