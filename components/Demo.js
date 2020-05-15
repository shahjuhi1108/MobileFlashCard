import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red, black, white, green } from '../utils/colors'

class Quiz extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Demo</Text>
                <TouchableOpacity
                    style={styles.textButton}>
                    <Text style={{ color: red, fontSize: 20 }}>Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.correctButton}>
                    <Text style={styles.correctButtonText}> Correct </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.incorrectButton}>
                    <Text style={styles.incorrectButtonText}> Incorrect </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Quiz

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