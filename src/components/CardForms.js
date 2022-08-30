import React from "react";

function CardForms(props) {
  const { card, setCard, handleSubmit, handleCancel } = props;
  const cardChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };
  //console.log(card);

  return (
    <React.Fragment>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Front
        </label>
        <textarea
          className="form-control"
          id="front"
          rows="3"
          name="front"
          value={card.front}
          onChange={cardChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Back
        </label>
        <textarea
          className="form-control"
          id="back"
          rows="3"
          name="back"
          value={card.back}
          onChange={cardChange}
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
    </React.Fragment>
  );
}

export default CardForms;
