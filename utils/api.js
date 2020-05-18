import { AsyncStorage } from "react-native"

export const STORAGE_KEY = 'ASYNC_STORAGE_KEY'

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
}

export function getDeck(title) {

    return getDecks().then((decks) => 
        JSON.parse(decks)[title])
        
}

export function addDeck(title, questions = []) {

    let obj = {}

    obj[title] = {
        title: title,
        questions: questions
    }

    return AsyncStorage.mergeItem(STORAGE_KEY,
        JSON.stringify(obj)
    )
}

export function addCardToDeck(title, question, answer) {

    return getDeck(title).then(deck => {
        const questions = deck.questions.concat({
            question: question,
            answer: answer
        })
        return addDeck(title, questions)
    })

}

export function removeDeck(title) {
    return getDecks().then(results => {
        const data = JSON.parse(results);
        data[title] = undefined;
        delete data[title];
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      });
}