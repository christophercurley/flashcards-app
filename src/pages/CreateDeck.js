import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeckForms from "../components/DeckForms";
import { createDeck, listDecks } from "../utils/api/index";
import { useHistory } from "react-router-dom";

function CreateDeck() {
  let defaultDeck = {
    name: "",
    description: "",
  };

  const history = useHistory();

  const handleSubmit = () => {
    async function create() {
      await createDeck(newDeck);
    }
    async function newDeckId() {
      const decks = await listDecks();
      const targetDeck = decks.filter((deck) => deck.name === newDeck.name);
      return targetDeck[0].id;
    }
    async function submit() {
      await create();
      const id = await newDeckId();
      console.log(id);
      history.push(`/decks/${id}`);
    }
    submit();
  };

  const handleCancel = () => {
    history.push("/");
  };

  const [newDeck, setNewDeck] = useState(defaultDeck);

  return (
    <React.Fragment>
      <div className="study">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h1>Create Deck</h1>
        <DeckForms
          deck={newDeck}
          setNewDeck={setNewDeck}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      </div>
    </React.Fragment>
  );
}

export default CreateDeck;
