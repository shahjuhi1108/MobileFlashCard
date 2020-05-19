import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple, black, white } from '../utils/colors'
import ListOfDecks from '../components/ListOfDecks'


class Scoreboard extends Component {
    render() {

        const { total, correct, goBack, goHome } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Your score is: {correct}/{total}</Text>
                <TouchableOpacity
                    onPress={() => {
                        goBack()
                    }}
                    style={styles.startOverButton}>
                    <Text style={styles.startOverButtonText}> Start Over </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        goHome()
                    }}
                    style={styles.goHomeButton}>
                    <Text style={styles.goHomeButtonText}> Home Page </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Scoreboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
    },
    header: {
        padding: 20,
        textAlign: 'center',
        fontSize: 50,
    },
    startOverButton: {
        backgroundColor: white,
        borderColor: black,
        borderWidth: 2,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 40,
        height: 45,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 80,
    },
    goHomeButton: {
        backgroundColor: black,
        padding: 20,
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
    startOverButtonText: {
        fontSize: 20,
        color: black,
        justifyContent: 'center',
        textAlign: 'center',
        color: black
    },
    goHomeButtonText: {
        fontSize: 20,
        color: black,
        justifyContent: 'center',
        textAlign: 'center',
        color: white
    }
})