import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CardForms from "../components/CardForms";
import { readDeck, createCard } from "../utils/api";

function AddCard() {
  const { deckId } = useParams();
  const history = useHistory();
  const defaultCard = {
    front: "Front side of card",
    back: "Back side of card",
  };
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState(defaultCard);

  const handleCancel = () => {
    history.push(`/decks/${deck.id}`);
  };

  const handleSubmit = () => {
    createCard(deckId, card);
    setCard(defaultCard);
  };

  useEffect(() => {
    const loadDeck = async () => {
      const currentDeck = await readDeck(deckId);
      setDeck(currentDeck);
    };
    loadDeck();
  }, [deckId]);

  //console.log(deck);

  return (
    <React.Fragment>
      <div className="study">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">{deck && deck.name}</li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
        <h1>Add Card</h1>
      </div>
      {deck ? (
        <CardForms
          card={card}
          setCard={setCard}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
      )}
    </React.Fragment>
  );
}

export default AddCard;
