import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { red, black, white, green } from '../utils/colors'
import { connect } from 'react-redux'
import Scoreboard from '../components/Scoreboard'


class Quiz extends Component {

    state = {
        currentCounter: 0,
        correct: 0,
        incorrect: 0,
        showQuestion: false,
    }

    handlePressIncorrect = (event) => {

        event.preventDefault()

        this.setState((prevState, props) => ({
            currentCounter: prevState.currentCounter + 1,
            incorrect: prevState.incorrect + 1,
            showQuestion: false
        }));

    }

    handlePressCorrect = (event) => {
        event.preventDefault()

        this.setState((prevState, props) => ({
            currentCounter: prevState.currentCounter + 1,
            correct: prevState.correct + 1,
            showQuestion: false
        }));
    }

    handleGoBack = () => {
        this.props.navigation.goBack()
    }

    handleGoHome = () => {
        this.props.navigation.navigate('ListOfDecks')
    }

    handleToggle = () => {
        this.setState({ showQuestion: !this.state.showQuestion })
    }

    handleStartOver = () => {
        this.setState({ 
            currentCounter: 0,
            correct: 0,
            incorrect: 0,
        })
    }


    render() {

        const { name, deck } = this.props
        const total = deck.questions.length
        const key = deck.questions[this.state.currentCounter]

        return this.state.currentCounter < total ? (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, justifyContent: 'flex-start', alignSelf: 'flex-start', padding: 10}}>
                    {this.state.currentCounter+1}/{total}
                </Text>
                {!this.state.showQuestion ? <Text style={styles.header}>{key.question}</Text> : <Text style={styles.header}>{key.answer}</Text>}
                <TouchableOpacity
                    onPress={this.handleToggle}
                    style={styles.textButton}>
                    {!this.state.showQuestion ? <Text style={{ color: red, fontSize: 20 }}>Show Answer</Text> : <Text style={{ color: red, fontSize: 20 }}>Show Question</Text>}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handlePressCorrect}
                    style={Platform.OS === 'ios' ? styles.iosCorrectButton : styles.correctButton}>
                    <Text style={styles.correctButtonText}> Correct </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handlePressIncorrect}
                    style={Platform.OS === 'ios' ? styles.iosIncorrectButton : styles.incorrectButton}>
                    <Text style={styles.incorrectButtonText}> Incorrect </Text>
                </TouchableOpacity>
            </View>
        )
            : <Scoreboard total={total} correct={this.state.correct} startOver = {this.handleStartOver} goBack={this.handleGoBack} goHome={this.handleGoHome} />
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
    iosCorrectButton: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
        marginBottom: 30,
        height: 45,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 90,
    },
    iosIncorrectButton: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
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