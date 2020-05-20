import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { red, black, white } from '../utils/colors'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions/index'
import { clearLocalNotification, setLocalNotification } from '../utils/helper'


class Deck extends Component {

    state = {
        isDeckDeleted: false
    }

    handleOnPress = (event) => {
        event.preventDefault()

        const { name, dispatch, navigation } = this.props

        dispatch(handleDeleteDeck(name))

        this.setState({
            isDeckDeleted: true
        })

    }

    handleStartQuiz = (event) => {
        event.preventDefault()

        const { name, deck, navigation } = this.props

        clearLocalNotification()
            .then(setLocalNotification)

        deck.questions.length === 0
            ? navigation.navigate('NoQuiz')
            : navigation.navigate('Quiz', { name: name, deck: deck })

    }

    render() {

        const { navigation } = this.props
        const { name, deck } = this.props

        const { isDeckDeleted } = this.state

        if (isDeckDeleted) {
            navigation.navigate('ListOfDecks')
            return null
        }

        return (
            <View style={styles.container}>
                <Text style={styles.header}>{name}</Text>
                <Text style={styles.subText}>{deck.questions.length} cards</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AddCard', { name: name })
                    }}
                    style={Platform.OS === 'ios' ? styles.iosCardButton : styles.cardButton}>
                    <Text style={[styles.cardButtonText, { color: black }]}> Add Card </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleStartQuiz}
                    style={Platform.OS === 'ios' ? styles.iosQuizButton : styles.quizButton}>
                    <Text style={styles.quizButtonText}> Start Quiz </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleOnPress}
                    style={styles.textButton}>
                    <Text style={{ color: red, fontSize: 20 }}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

function mapStateToProps(state, ownProps) {

    const { name } = ownProps.route.params

    let deck = state[name]

    deck = deck ? deck : { title: name, questions: [] }

    return {
        name,
        deck
    }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
    },
    header: {
        padding: 10,
        textAlign: 'center',
        fontSize: 50,
    },
    subText: {
        padding: 5,
        textAlign: 'center',
        fontSize: 20,
    },
    cardButton: {
        backgroundColor: white,
        borderColor: black,
        borderWidth: 2,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 140,
    },
    quizButton: {
        backgroundColor: black,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 80,
    },
    iosCardButton: {
        backgroundColor: white,
        borderColor: black,
        borderWidth: 7,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 140,
    },
    iosQuizButton: {
        backgroundColor: black,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 80,
    },
    textButton: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 30,
    },
    cardButtonText: {
        fontSize: 20,
        color: black,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    },
    quizButtonText: {
        fontSize: 20,
        color: black,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    }
})

//Make changes for ios and android based buttons - lookwise.