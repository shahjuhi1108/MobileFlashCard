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

export function handleGetDecks (decks) {
    return receiveDecks(decks)
}

export function saveDeck (title) {
    return {
        type: ADD_DECK,
        title
    }
}

export function handleAddDeck ( title ) {
   return saveDeck(title)
}

export function saveCardToDeck (title, card) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        card
    }
}

export function receiveDeck (deck) {
    return {
        type: RECEIVE_DECK,
        deck
    }
}