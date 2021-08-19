import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form({
    onSubmit,
    initialState = { name: "", description: "" },
    }) {
    const [deck1, setDeck] = useState(initialState);

    function changeHandler({ target: { name, value } }) {
        setDeck((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        onSubmit(deck1);
    }

    return (
        <div>
        <form onSubmit={submitHandler} className="deck-edit">
            <fieldset>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={deck1 && deck1.name}
                required={true}
                placeholder="Deck Name"
                onChange={changeHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                id="description"
                name="description"
                className="form-control"
                rows="4"
                required={true}
                placeholder="Brief description of the deck"
                value={deck1 && deck1.description}
                onChange={changeHandler}
                />
            </div>
            <button 
            className="btn btn-primary" type="submit">
                Submit
            </button>
            <Link to="/">
                <button 
                className="btn btn-danger" type="button">Cancel</button>
            </Link>
            </fieldset>
        </form>
        </div>
    );
    }
