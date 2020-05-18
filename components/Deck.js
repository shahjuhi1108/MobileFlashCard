import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { purple, red, black, white } from '../utils/colors'


class Deck extends Component {

    render() {

        const { name } = this.props.route.params

        return (
            <View style={styles.container}>
                <Text style={styles.header}>{name}</Text>
                <Text style={styles.subText}>{0} cards</Text>
                <TouchableOpacity
                    style={styles.cardButton}>
                    <Text style={[styles.cardButtonText, {color: black}]}> Add Card </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.quizButton}>
                    <Text style={styles.quizButtonText}> Start Quiz </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.textButton}>
                    <Text style={{ color: red, fontSize: 20 }}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Deck

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