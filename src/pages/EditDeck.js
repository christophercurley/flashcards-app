import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import DeckForms from "../components/DeckForms";
import { readDeck, updateDeck } from "../utils/api";

function EditDeck() {
  const [deck, setDeck] = useState(null);
  const { deckId } = useParams();
  const history = useHistory();

  const handleSubmit = () => {
    const update = async () => await updateDeck(deck);
    update();
    history.push(`/decks/${deck.id}`);
  };

  const handleCancel = () => {
    history.push(`/decks/${deck.id}`);
  };

  useEffect(() => {
    async function getDeck() {
      const pendingDeck = await readDeck(deckId);
      setDeck(pendingDeck);
    }
    getDeck();
  }, []);

  //console.log(deck);

  return (
    <React.Fragment>
      {deck ? (
        <React.Fragment>
          <div className="study">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">{deck && deck.name}</li>
                <li className="breadcrumb-item active" aria-current="page">
                  Edit Deck
                </li>
              </ol>
            </nav>
            <h1>Edit Deck</h1>
          </div>
          <DeckForms
            deck={deck}
            setNewDeck={setDeck}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />
        </React.Fragment>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
      )}
    </React.Fragment>
  );
}

export default EditDeck;
