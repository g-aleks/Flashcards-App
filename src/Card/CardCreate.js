import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { createCard } from '../utils/api'
import Form from './Form'

export default function CardCreate() {

    const history= useHistory()
    const {deckId} = useParams()
    
    function submitHandler(card){
        createCard(deckId, card)
        .then((savedCard)=>{
            history.push(`/decks/${deckId}`)
        })
    }

    function cancel(){
        history.goBack()
    }

    return (
        <div>
            <Form onCancel={cancel} onSubmit={submitHandler} />
        </div>
    )
}
