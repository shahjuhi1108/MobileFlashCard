import { AsyncStorage } from "react-native"

export const STORAGE_KEY = 'ASYNC_STORAGE_KEY'

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
}

export function addDeck(title) {

    let obj = {}

    obj[title] = {
        title: title,
        questions: []
    }

    return AsyncStorage.mergeItem(STORAGE_KEY,
        JSON.stringify(obj)
    )
}