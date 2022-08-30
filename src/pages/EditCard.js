import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";
import CardForms from "../components/CardForms";

function EditCard() {
  const { cardId, deckId } = useParams();
  const history = useHistory();
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({});

  const handleCancel = () => {
    history.push(`/decks/${deckId}`);
  };

  const handleSubmit = () => {
    updateCard(card);
    history.push(`/decks/${deckId}`);
  };

  useEffect(() => {
    const loadCardAndDeck = async () => {
      const lCard = await readCard(cardId);
      const lDeck = await readDeck(deckId);
      setCard(lCard);
      setDeck(lDeck);
    };
    loadCardAndDeck();
  }, [cardId, deckId]);

  //console.log(card, deck);

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
              Edit Card {card.id}
            </li>
          </ol>
        </nav>
        <h1>Edit Card</h1>
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

export default EditCard;
