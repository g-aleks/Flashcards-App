import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from "react-router-dom"
import { readCard, updateCard } from '../utils/api'
import Form from './Form'


export default function CardEdit() {
    const history = useHistory();

    const { deckId, cardId } = useParams();
    const [card, setCard] = useState();

    useEffect(loadCard, [cardId]);

    function loadCard() {
        readCard(cardId).then(setCard);
    }

    function submitHandler(card) {
        updateCard(card)
        .then(() => {
        history.push(`/decks/${deckId}`);
        });
    }

    const renderForm = card ? (
        <Form onSubmit={submitHandler} initialState={card} />
    ) : (
        <p>Loading...</p>
    );

    return (
        <div>
        <h2>Edit Card</h2>
        {renderForm}
        </div>
    );
}
