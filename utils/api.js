import { AsyncStorage } from "react-native"

export const STORAGE_KEY = 'ASYNC_STORAGE_KEY'

export function getDecks () {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((result) => {
            result === null
            ? null
            : JSON.stringify(result)
        })
}

export function getDeck (id) {

}

export function addDeck (id) {
    
}