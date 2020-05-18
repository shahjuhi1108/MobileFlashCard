export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const DELETE_DECK = 'DELETE_DECK'

import { getDecks, addDeck, addCardToDeck, removeDeck } from '../utils/api'


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
   return (dispatch) => {
       return addCardToDeck(
           title,
           question,
           answer
       ).then(result => dispatch(saveCardToDeck(title, question, answer)))
   }
} 

export function receiveDeck (deck) {
    return {
        type: RECEIVE_DECK,
        deck
    }
}

export function deleteDeck (title) {
    return {
        type: DELETE_DECK,
        title
    }
}

export function handleDeleteDeck (title) {
    return (dispatch) => {
        return removeDeck(
            title
        ).then(result => dispatch(deleteDeck(title)))
    }
}