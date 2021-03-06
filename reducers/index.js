import { RECEIVE_DECKS, ADD_CARD_TO_DECK, ADD_DECK, RECEIVE_DECK, DELETE_DECK } from '../actions/index'


function entries (state = {}, action) {
    
    switch (action.type) {
        case RECEIVE_DECKS :
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK :
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
            }

        case ADD_CARD_TO_DECK :
            return {
                ...state,
                [action.title]: {
                    ...state[action.title],
                    questions: state[action.title].questions.concat({
                        question: action.question,
                        answer: action.answer
                    })
                }
            }
        case RECEIVE_DECK :
            return {
                ...state,
                ...action.deck
            }

        case DELETE_DECK :
            const newState =  { ...state, [action.title]: undefined}
            delete newState[action.title]
            return newState
        default :
            return state
    }
}

export default entries