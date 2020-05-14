import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { purple } from '../utils/colors'


class AddCard extends Component {

    render() {
        return (
            <View  style={styles.container}>
                <View>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Question"
                        placeholderTextColor="#808080"
                        autoCapitalize="sentences" />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Answer"
                        placeholderTextColor="#808080"
                        autoCapitalize="sentences" />
                </View>
                <TouchableOpacity
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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
        marginBottom: 50,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        height: 45,
        alignSelf: "center",
        justifyContent: 'center',
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