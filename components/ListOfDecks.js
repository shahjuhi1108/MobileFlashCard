import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { handleGetDecks } from '../actions/index'
import { connect } from 'react-redux'
import { red, purple } from '../utils/colors'


class ListOfDecks extends Component {

    UNSAFE_componentWillMount() {
        const { dispatch } = this.props

        dispatch(handleGetDecks())

    }

    render() {
        const decksList = this.props.decksList
        const decks = decksList ? Object.keys(decksList) : []
        return decks.length !== 0 ?

            <View style={styles.container}>
                <Text style={styles.headerText}>List of Decks</Text>
                {decks.map((key) => (
                    <View key={key}>
                        <TouchableOpacity
                            style={styles.textButton}>
                            <Text style={{ color: red, fontSize: 20 }}>Deck Name: {decksList[key].title}</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Total: {decksList[key].questions.length} cards</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
    },
    headerText: {
        fontSize: 30, 
        color: purple, 
        justifyContent: 'center', 
        alignSelf: 'center'
    },
    textButton: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
    },
    text: {
        padding: 10,
        alignSelf: "center",
        justifyContent: "center",
    }
})

export default connect(mapStateToProps)(ListOfDecks)