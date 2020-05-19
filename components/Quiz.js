import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red, black, white, green } from '../utils/colors'
import { connect } from 'react-redux'
import Scoreboard from '../components/Scoreboard'


class Quiz extends Component {

    state = {
        currentCounter: 0,
        correct: 0,
        incorrect: 0,
    }

    handlePressIncorrect = (event) => {

        event.preventDefault()

        this.setState((prevState, props) => ({
            currentCounter: prevState.currentCounter + 1,
            incorrect: prevState.incorrect + 1
        }));

    }


    handlePressCorrect = (event) => {
        event.preventDefault()

        this.setState((prevState, props) => ({
            currentCounter: prevState.currentCounter + 1,
            correct: prevState.correct + 1
        }));
    }

    handleGoBack = () => {
        this.props.navigation.goBack()
    }

    handleGoHome = () => {
        this.props.navigation.navigate('ListOfDecks')
    }

    render() {

        const { name, deck } = this.props
        const total = deck.questions.length
        const key = deck.questions[this.state.currentCounter]

        return this.state.currentCounter < total ? (
            <View style={styles.container}>
                <Text style={styles.header}>{key.question}</Text>
                <TouchableOpacity
                    style={styles.textButton}>
                    <Text style={{ color: red, fontSize: 20 }}>Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handlePressCorrect}
                    style={styles.correctButton}>
                    <Text style={styles.correctButtonText}> Correct </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handlePressIncorrect}
                    style={styles.incorrectButton}>
                    <Text style={styles.incorrectButtonText}> Incorrect </Text>
                </TouchableOpacity>
            </View>
        )
        : <Scoreboard total={total} correct={this.state.correct} goBack={this.handleGoBack} goHome={this.handleGoHome}/>
    }
}

function mapStateToProps(state, ownProps) {

    const { name } = ownProps.route.params
    let deck = state[name]

    return {
        name,
        deck
    }
}

export default connect(mapStateToProps)(Quiz)

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
    correctButton: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 90,
    },
    incorrectButton: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 30,
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
    },
    correctButtonText: {
        fontSize: 20,
        color: black,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    },
    incorrectButtonText: {
        fontSize: 20,
        color: black,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    }
})

//Make changes for ios and android based buttons - lookwise.