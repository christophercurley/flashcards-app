import React from "react";
import "./DeckForms.css";

function DeckForms(props) {
  const { deck, setNewDeck, handleSubmit, handleCancel } = props;
  const deckChange = (e) => {
    setNewDeck({
      ...deck,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={deck.name}
          onChange={(e) => {
            deckChange(e);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          name="description"
          value={deck.description}
          onChange={(e) => {
            deckChange(e);
          }}
        ></textarea>
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default DeckForms;
