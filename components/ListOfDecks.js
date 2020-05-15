import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'


class ListOfDecks extends Component {

    render() {

        const decksList = this.props.decksList
        const decks = decksList ? Object.keys(decksList) : []
        return decks.length !== 0 ?

            <View>
                <Text>List of Decks</Text>
                {decks.map((key) => (
                    <View>
                        <Text>{decksList[key].title}</Text>
                        <Text>{decksList[key].questions.length} cards</Text>
                    </View>
                ))}
            </View>

            : <Text>No decks</Text>
    }
}

function mapStateToProps(state) {

    console.log(state)
    return {
        decksList: state
    }
}

export default connect(mapStateToProps)(ListOfDecks)