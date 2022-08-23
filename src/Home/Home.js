import { listDecks } from "../utils/api/index";
import React, { useState, useEffect } from "react";
import ListDecks from "../components/ListDecks";

function Home() {
  const [decks, setDecks] = useState([]);

  const handleDelete = (event) => {
    const newDecks = decks.filter(
      (deck) => deck.id !== Number(event.target.id)
    );
    if (window.confirm("Are you sure you want to delete?")) {
      setDecks(newDecks);
    }
  };

  useEffect(() => {
    async function getDecks() {
      const abortCont = new AbortController();
      const deckList = await listDecks(abortCont.signal);
      setDecks(deckList);
    }
    getDecks();
    return () => AbortController.abort();
  }, []);

  return (
    <React.Fragment>
      <h1>Home</h1>
      <button
        type="button"
        className="btn btn-success create"
        onClick={() => console.log(decks)}
      >
        Create Deck
      </button>
      <div className="home">
        <ListDecks decks={decks} handleDelete={handleDelete} />
      </div>
    </React.Fragment>
  );
}

export default Home;
