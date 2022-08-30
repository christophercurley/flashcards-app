import React, { useState, useEffect } from "react";
import { listDecks, deleteDeck } from "../utils/api/index";
import ListDecks from "../components/ListDecks";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const [decks, setDecks] = useState(null);
  const history = useHistory();

  const handleDelete = (event) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteDeck(event.target.id);
      history.go(0);
    }
  };

  useEffect(() => {
    async function getDecks() {
      const deckList = await listDecks();
      setDecks(deckList);
    }
    getDecks();
  }, []);

  return (
    <React.Fragment>
      <h1>Home</h1>
      <Link to="/decks/new">
        <button type="button" className="btn btn-success create">
          Create Deck +
        </button>
      </Link>
      <div className="home">
        {decks ? (
          <ListDecks decks={decks} handleDelete={handleDelete} />
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Home;
