export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const RECEIVE_DECK = 'RECEIVE_DECK'

import { getDecks, addDeck } from '../utils/api'


export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function handleGetDecks () {
    return (dispatch) => {
        return getDecks().then((decks) => {
                const parsed = decks ? JSON.parse(decks) : {}
                dispatch(receiveDecks(parsed))
            })
    }
}

export function saveDeck (title) {
    
    return {
        type: ADD_DECK,
        title
    }
}

export function handleAddDeck ( title ) {
    return (dispatch) => {
        return addDeck(
            title
        ).then(result => dispatch(saveDeck(title)))
    }
}


export function saveCardToDeck (title, question, answer) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        question,
        answer
    }
}

export function handleSaveCard (title, question, answer) {
   return saveCardToDeck(title, question, answer)
}

export function receiveDeck (deck) {
    return {
        type: RECEIVE_DECK,
        deck
    }
}