import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { purple } from '../utils/colors'
 

class AddDeck extends Component {

    state = {
        deckName: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>What is the title of your new deck?</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Deck Title"
                    placeholderTextColor="#808080"
                    autoCapitalize="sentences" />
                <TouchableOpacity
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> Create Deck </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddDeck

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
    input: {
        padding: 5,
        margin: 15,
        height: 40,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 2,
    },
    submitButton: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 0,
    },
    submitButtonText: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    }
})

//Make changes for ios and android based buttons - lookwise.